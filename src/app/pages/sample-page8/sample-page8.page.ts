import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-sample-page8',
  templateUrl: './sample-page8.page.html',
  styleUrls: ['./sample-page8.page.scss'],
})
export class SamplePage8Page implements OnInit {

  constructor( private alertCtrl : AlertController) { }

  ngOnInit() {
  }
  async showBasicAlert(){
    const alertBox = await this.alertCtrl.create({
      header: 'User Info',
      subHeader: 'Enter your Infomation',
      inputs:[
        {
          type:'text',
          name:'firstName',
          placeholder:'FIRST NAME'
        },
        {
          type:'text',
          name:'LastName',
          placeholder:'LAST NAME'
        },
      ],
      buttons:[
        {
          text: 'Cancel',
          handler(){
            console.log('Click Cancel')
          }
        },
        {
          text: 'Save',
          handler(data){
            console.log(data.firstName + ' ' + data.LastName)
          }
        },
      ]
    })
    await alertBox.present();
  }

}
