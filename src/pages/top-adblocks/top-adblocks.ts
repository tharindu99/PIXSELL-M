import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the TopAdblocksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top-adblocks',
  templateUrl: 'top-adblocks.html',
  
})
export class TopAdblocksPage {
  ADblocks: Observable<Adblocks[]>; 

  constructor(public navCtrl: NavController, public navParams: NavParams,afDB:AngularFireDatabase) 
  {
    this.ADblocks = afDB.list('Ad-blocks').valueChanges(); 
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
    duration: number,
    numberOfPx: number,
    ownerSetRisk: string,
    siteName: string,
    starts: string
      
}