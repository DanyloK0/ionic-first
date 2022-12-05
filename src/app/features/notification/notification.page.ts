import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  notifications: any = [];

  constructor( private service: CrudService, private loadingCtrl: LoadingController) { }

  ngOnInit() { this.getNotifications() }

  async getNotifications(){
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.service.getNotifications().subscribe({
      next: (data: any) => {
        loading.dismiss();
        this.notifications = data.list;
        console.log(this.notifications);
      },
      error: (err: any) => {
        loading.dismiss();
        console.log(err)
      }
    })
  }
}
