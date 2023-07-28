import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-exercise6',
  templateUrl: './exercise6.page.html',
  styleUrls: ['./exercise6.page.scss'],
})
export class Exercise6Page implements OnInit {

  constructor( private alertCtrl : AlertController) { }

  ngOnInit() {
  }
  async showBasicAlert(){
    const alertBox = await this.alertCtrl.create({
      header: 'Login',
      inputs:[
        {
          type:'text',
          name:'userName',
          placeholder:'USER NAME'
        },
        {
          type:'text',
          name:'password',
          placeholder:'PASSWORD'
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
          text: 'Submit',
          handler(data){
            if(data.userName === '' || data.password === ''){
              console.log('ERROR!')
            } else{
              console.log('SUCCESSFUL!')
            }
          }
        },
      ]
    })
    await alertBox.present();
  }

}
