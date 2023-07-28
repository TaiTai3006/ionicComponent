import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-exercise7',
  templateUrl: './exercise7.page.html',
  styleUrls: ['./exercise7.page.scss'],
})
export class Exercise7Page implements OnInit {
  
  constructor( private alertCtrl : AlertController) { }

  ngOnInit() {
  }
  cover: string = "https://cdn-icons-png.flation.com/512/4345/4345716.png"
  ablbums: any = [
    {
      title: 'Thriller',
      artist:'Michael Jackson',
      year: 1982
    },
    {
      title: 'Back in Black',
      artist:'AC/AD',
      year: 1980
    },
    {
      title: 'The Dark side of the Moon',
      artist:'Pink Floyd',
      year: 1973
    },
  ]

  async showBasicAlertAdd() {
    const alertBox = await this.alertCtrl.create({
      header: 'Add new album',
      inputs: [
        {
          type: 'text',
          name: 'title',
          placeholder: 'ENTER TITLE'
        },
        {
          type: 'text',
          name: 'artist',
          placeholder: 'ENTER ARTIST'
        },
        {
          type: 'text',
          name: 'year',
          placeholder: 'ENTER YEAR'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Click Cancel');
          }
        },
        {
          text: 'Add',
          handler: (data) => {
            if (data.title !== '' && data.artist !== '' && data.year !== '') {
              const newAlbum = {
                title: data.title,
                artist: data.artist,
                year: data.year
              };
              this.ablbums.push(newAlbum);
            }
          }
        },
      ]
    });
    await alertBox.present();
  }

  async showBasicAlertEdit(ablum: any, index: number){
    // const itemE1 = event.target.closest('ion-item-sliding').querySelector('ion-item')
    // const itemValue = itemE1.getAttribute('value')
    console.log(ablum + ' ' + index)
    const alertBox = await this.alertCtrl.create({
      header: 'Edit album',
      inputs: [
        {
          type: 'text',
          name: 'title',
          placeholder: 'ENTER TITLE',
          value: ablum.title
        },
        {
          type: 'text',
          name: 'artist',
          placeholder: 'ENTER ARTIST',
          value:ablum.artist
        },
        {
          type: 'text',
          name: 'year',
          placeholder: 'ENTER YEAR',
          value: ablum.year
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Click Cancel');
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            if (data.title !== '' && data.artist !== '' && data.year !== '') {
                this.ablbums[index].title = data.title;
                this.ablbums[index].artist = data.artist;
                this.ablbums[index].year = data.year;
                
            }
          }
        },
      ]
    });
    await alertBox.present();
  }

  async showBasicAlertDetele(artist: string, index: number){
    const alertBox = await this.alertCtrl.create({
      header: 'Confirm Delete',
      subHeader:'Are you sure you want to delete ' + artist+'?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Click Cancel');
          }
        },
        {
          text: 'Delete',
          handler: (data) => {
            this.ablbums.splice(index);
          }
        },
      ]
    });
    await alertBox.present();
  }

  


}
