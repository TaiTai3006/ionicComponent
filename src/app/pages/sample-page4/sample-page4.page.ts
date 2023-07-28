import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-sample-page4',
  templateUrl: './sample-page4.page.html',
  styleUrls: ['./sample-page4.page.scss'],
})
export class SamplePage4Page implements OnInit {

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
