import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-sample-page5',
  templateUrl: './sample-page5.page.html',
  styleUrls: ['./sample-page5.page.scss'],
})
export class SamplePage5Page implements OnInit {

  constructor (private actionCtrl : ActionSheetController){}

  ngOnInit() {
  }
  async showActionSheet(){
    const actionSheet = await this.actionCtrl.create({
      header: 'Action Sheet Header',
      buttons:[{
        text: 'Delete',
        handler(){
          console.log('hi')
        }
      },
      {
        text: 'Archive',
        handler(){
          console.log('hello')
        }
      },{
        text: 'Cancel',
        role:'cancel'
      }
       
      ]
    })
    await actionSheet.present()
  }

}
