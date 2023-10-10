import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ShakeService } from '../shake.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public show;

  constructor(
  	public shakeService: ShakeService,
  	public alertController: AlertController) {  	  	

  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>Shake</strong>!!!',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            
          }
        }
      ]
    });    
	await alert.present();
  }

  changeShow(){
    this.show.unsubscribe();
    this.presentAlertConfirm();
  }

  startWatching(){
  	this.show = this.shakeService.startWatching();
  }


}
