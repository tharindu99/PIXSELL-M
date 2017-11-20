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
  click_status = true;
  subscription;
  webSites: Array<string> = [];
  loadedwebSites: Array<string> = [];
  searchedSite;
  showHeading = false;
  ADblocks;
  Records;

  constructor(public afDB: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    
    this.subscription = this.afDB.list('/Ad-blocks').valueChanges()
        .subscribe(data => { 
            data.forEach (element => { 
            this.loadedwebSites.push(element['siteName']);
          });       
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
    this.click_status = true;
    this.initializewebSites();
        
    let input = ev.target.value;
    
    if (input == null) {
      this.webSites = [];
    } 

    if (input && input.trim() != '') {
      this.webSites = this.webSites.filter((item) => {
        return (item.toLowerCase().indexOf(input.toLowerCase()) > -1);
      })
    }
  }

  showAdblocks(webSite: string) {
    this.click_status = false;
    this.showHeading = true;
    this.searchedSite = webSite;
    this.afDB.list('Ad-blocks', ref => ref.orderByChild('siteName').equalTo(webSite))
      .valueChanges()
      .subscribe(block => {
        this.ADblocks = block;
        console.log("Adblock : ", this.ADblocks);               
        this.getRecordDetails(this.ADblocks[0]['blockId']);
    });
    
  }

  getRecordDetails(id: string) {    
    this.afDB.list('/Records', ref => ref.orderByChild('blockId').equalTo(id).limitToLast(1))
      .valueChanges()
      .subscribe(record => {
        this.Records = record;
        console.log("records : ", this.Records);
    });     
  }  

}

/*
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
*/