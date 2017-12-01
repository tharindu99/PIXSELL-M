import { ElementRef,ViewChild,Renderer,Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Chart } from 'chart.js';
import * as moment from 'moment';



@IonicPage()
@Component({
  selector: 'page-top-adblocks',
  templateUrl: 'top-adblocks.html',
  
  
})
export class TopAdblocksPage {
  ADblocks; 
  Records;
  adblock_expanded = false;
  @ViewChild("cc") cardContent: any;
  @ViewChild('priceChart') priceChart:ElementRef;
  lineChart: any;
  Math: any;

  constructor(private renderer :Renderer,public navCtrl: NavController, public navParams: NavParams,public afDB:AngularFireDatabase) 
  {
    this.Math = Math;

    this.afDB.list('Ad-blocks', ref => ref.orderByChild('pricePerPx').limitToFirst(5))
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopAdblocksPage');
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
