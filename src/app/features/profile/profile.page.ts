import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile: any = {};

  constructor( private service: CrudService, private loadingCtrl: LoadingController) { }

  ngOnInit() { this.getNotifications() }

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
}
