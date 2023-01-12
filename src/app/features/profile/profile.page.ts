import { Component, OnInit } from '@angular/core';
import { LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CrudService } from 'src/app/shared/services/crud.service';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  IMAGE_DIR = 'stored-images' ;

  profile: any = {};
  images: any[]=[]

  constructor( private service: CrudService, private loadingCtrl: LoadingController, private authService: AuthService,  private router: Router, private platform: Platform) { }

  ngOnInit() { this.getNotifications() }

  async loadFiles(){
    this.images = [];
    const loading = await this.loadingCtrl.create({
      message: "Loading data..."
    });
    await loading.present();
    Filesystem.readdir({
      directory: Directory.Data,
      path: this.IMAGE_DIR
    }).then(result => {
    
    }, async err => {
      console.log(err);
      await Filesystem.mkdir({
        directory: Directory.Data,
        path: this.IMAGE_DIR
      });
    }).then(_ => loading.dismiss())
  };

  async selectImage(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos
    });
    console.log('image', image)
    if (image) {
      this.saveImage(image);
    }
  }

  async saveImage(photo: Photo){
    const base64Data = await this.readAsBase64(photo);
    console.log(base64Data)
    const fileName = new Date().getTime()+ '.jpeg';
    const sendFile = await Filesystem.writeFile({
      directory: Directory.Data,
      path: `${this.IMAGE_DIR}/${fileName}`,
      data: base64Data
    });
    console.log('saved')
  }
  async readAsBase64(photo: Photo) {
    if(this.platform.is('hybrid')){
      const file = await Filesystem.readFile({
        path: photo.path
      });
      return file.data
    }
    else{
      const respomse = await fetch(photo.webPath);
      const blob = await respomse.blob();
      return await this.convertBlobToBase64(blob) as string;

    }
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject)=>{
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  })


  takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 100,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });

  // image.webPath will contain a path that can be set as an image src.
  // You can access the original file using image.path, which can be
  // passed to the Filesystem API to read the raw data of the image,
  // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  var imageUrl = image.webPath;

  // Can be set to the src of an image now
  // imageElement.src = imageUrl;
};

  async getNotifications(){
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.service.getProfile().subscribe({
      next: (data: any) => {
        loading.dismiss();
        this.profile = data;
        console.log(this.profile);
      },
      error: (err: any) => {
        loading.dismiss();
        console.log(err)
      }
    })

  }
  logOut() {
    this.authService.logOut().subscribe(() => {
      this.router.navigate(['/auth'])
      localStorage.removeItem('token')
    })
  }
}
