import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-top-adblocks',
  templateUrl: 'top-adblocks.html',
  
})
export class TopAdblocksPage {
  ADblocks: Observable<Adblocks[]>; 

  constructor(public navCtrl: NavController, public navParams: NavParams,afDB:AngularFireDatabase) 
  {
    this.ADblocks = afDB.list('Ad-blocks', ref => ref.orderByChild('progressRate')
          .limitToLast(10)).valueChanges();
    //this.ADblocks = afDB.list('Ad-blocks').valueChanges();  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopAdblocksPage');
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
