import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sampl-page15',
  templateUrl: './sampl-page15.page.html',
  styleUrls: ['./sampl-page15.page.scss'],
})
export class SamplPage15Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSwipe(event: any){
    const itemE1 = event.target.closest('ion-item-sliding').querySelector('ion-item')
    const itemValue = itemE1.getAttribute('value')
    console.log('Swiped item value:' + itemValue)
  }

}
