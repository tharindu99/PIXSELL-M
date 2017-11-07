import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-search-adblocks',
  templateUrl: 'search-adblocks.html',
})
export class SearchAdblocksPage {
  
  subscription;
  webSites: Array<string> = [];
  loadedwebSites: Array<string> = [];
  Adblocks: Observable<any[]>;
  
  constructor(public afDB: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    
    this.subscription = this.afDB.list('/Ad-blocks').valueChanges().subscribe(data => {      
      for (var i = 0; i < data.length; i++) {
        this.loadedwebSites.push(data[i].block.siteName);
        console.log(data[i]);        
      }        
    });  
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchAdblocksPage');
  }

  initializewebSites() {
    this.webSites = [];
    this.webSites = this.loadedwebSites;
  }

  getItems(ev: any) {
    this.initializewebSites();
        
    let input = ev.target.value;

    if (input == "") {
      this.webSites = [];
    } 

    if (input && input.trim() != '') {
      this.webSites = this.webSites.filter((item) => {
        return (item.toLowerCase().indexOf(input.toLowerCase()) > -1);
      })
    }
  }

  showAdblocks(webSite: string) {
    console.log("selected site : ", webSite);
   
    this.Adblocks = this.afDB.list('Ad-blocks', ref => ref.orderByChild('siteName').equalTo(webSite)).valueChanges();

    console.log(this.Adblocks);
     
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
