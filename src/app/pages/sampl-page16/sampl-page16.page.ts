import { Component, OnInit } from '@angular/core';
import {ItemReorderEventDetail} from '@ionic/angular'
@Component({
  selector: 'app-sampl-page16',
  templateUrl: './sampl-page16.page.html',
  styleUrls: ['./sampl-page16.page.scss'],
})
export class SamplPage16Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  handleReorder(ev: CustomEvent<ItemReorderEventDetail>){
    console.log('Dragged from index', ev.detail.from,'to',ev.detail.to)
    ev.detail.complete()
  }

}
