import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-search-adblocks',
  templateUrl: 'search-adblocks.html',
})
export class SearchAdblocksPage {
  
  subscription;
  
  constructor(public afDB: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    console.log("inside search page");
    this.subscription = this.afDB.list('/Ad-blocks').subscribe(data => {
      console.log(data);      
    });    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchAdblocksPage');
  }
}

export interface Adblocks {
  availablePx:number,
  basePrice: number,
  blockId: string|number,
  blockName: string,
  currentPrice: number,
  duration: number,
  expectPrice : number,
  numberOfPx: number,
  ownerSetRisk: string,
  progressRate:number,
  siteName: string,
  starts: string
    
}







