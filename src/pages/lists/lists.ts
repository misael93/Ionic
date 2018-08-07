import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {

  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = ["Red", "Green", "Blue"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListsPage');
  }

}
