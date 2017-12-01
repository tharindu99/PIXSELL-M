import { AfterViewInit,Renderer,ViewChild,Component,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Chart } from 'chart.js';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-search-adblocks',
  templateUrl: 'search-adblocks.html',
})

export class SearchAdblocksPage implements AfterViewInit {
 
  adblock_expanded = false;
  @ViewChild("cc") cardContent: any;
  @ViewChild('priceChart') priceChart:ElementRef;

  lineChart: any;

  click_status = true;
  subscription;
  webSites: Array<string> = [];
  loadedwebSites: Array<string> = [];
  searchedSite;
  showHeading = false;
  ADblocks;
  Records;
  Math: any;

  constructor(private renderer :Renderer ,public afDB: AngularFireDatabase, public navCtrl: NavController,
    public navParams: NavParams) {

  this.Math = Math;
    this.subscription = this.afDB.list('/Ad-blocks').valueChanges()
      .subscribe(data => { 
          data.forEach (element => { 
          if (this.loadedwebSites.indexOf(element['siteName']) == -1) {
            this.loadedwebSites.push(element['siteName']);
          }
        });       
      });
      
  }
 

  ngAfterViewInit() {
    
        
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
    // clear input field should be added here ...
    
    this.click_status = false;
    this.showHeading = true;
    this.searchedSite = webSite;
    this.afDB.list('Ad-blocks', ref => ref.orderByChild('siteName').equalTo(webSite))
      .valueChanges()
      .subscribe(block => {
        this.ADblocks = block;
        //console.log("Adblock : ", this.ADblocks);       
        for (var index = 0; index < block.length; index++) {
          this.getRecordDetails(this.ADblocks[index]['blockId']);
        }
    });
  }
  getRecordDetails(id: string) {    
    this.afDB.list('/Records', ref => ref.orderByChild('blockId').equalTo(id).limitToLast(1))
      .valueChanges()
      .subscribe(record => {
        this.Records = record;
        //console.log("records : ", this.Records);
    }); 
      
  } 
  

  toggle_adblock(blockId){
    if(this.adblock_expanded){
      this.renderer.setElementStyle(this.cardContent.nativeElement,"max-height","0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement,"padding","0px 16px");
    }else{
      this.renderer.setElementStyle(this.cardContent.nativeElement,"max-height","1000px");
      this.renderer.setElementStyle(this.cardContent.nativeElement,"padding","13px 16px");

      
    }
    this.adblock_expanded = !this.adblock_expanded;

    this.getData_pxpriceGraph(blockId);

  }

  
  Preprocessor(record){
    //console.log(record);
    var time_label = record.map(function(e){
      return moment(e.timeStamp).format("hh:mm");      
    });
    var pxprice = record.map(function(e){
      return e.pricePerPx.toFixed(2)
    });
    //console.log(label);

    if (this.priceChart && this.priceChart.nativeElement) {
      
      
              this.lineChart = new Chart(this.priceChart.nativeElement, {
                type: 'line',
                data: {
                    labels: time_label,
                    datasets: [{
                        label:'Price Per Px',
                        fill: false,
                        data: pxprice,
                    }]
                },
               
                  elements: { 
                    point: { 
                      radius: 0,
                    }
                  }
                
               
       
              });
            }else{
              console.log("not found elemnt ..")
            }
  }

  getData_pxpriceGraph(blockId){
    var pricedata;
    this.afDB.list('/Records',ref => ref.orderByChild('blockId').equalTo(blockId)
    .limitToLast(20))
    .valueChanges()
    .subscribe(record => {
      pricedata = record;
      this.Preprocessor(record);

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