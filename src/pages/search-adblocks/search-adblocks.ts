import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search-adblocks',
  templateUrl: 'search-adblocks.html',
})
export class SearchAdblocksPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchAdblocksPage');
  }
}







