import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the SuggestAdblocksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-suggest-adblocks',
  templateUrl: 'suggest-adblocks.html',
})
export class SuggestAdblocksPage {
  ADblocks: Observable<Adblocks[]>; 
  constructor(public navCtrl: NavController, public navParams: NavParams,afDB:AngularFireDatabase) {
    this.ADblocks = afDB.list('Ad-blocks', ref => ref.limitToLast(10)).valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuggestAdblocksPage');
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
