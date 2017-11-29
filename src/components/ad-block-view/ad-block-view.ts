import { Renderer,OnInit,ViewChild,Component } from '@angular/core';
import { AdblockDataProvider } from '../../providers/adblock-data/adblock-data';


@Component({ 
  selector: 'ad-block-view',
  templateUrl: 'ad-block-view.html' 
})

export class AdBlockViewComponent implements OnInit {

  adblock_expanded = false;
  @ViewChild("cc") cardContent: any;
  ADblocks;
  Records;

  constructor( private ADblock:AdblockDataProvider,public renderer:Renderer) {
    console.log('Hello AdBlockViewComponent Component');
    console.log(ADblock);
    
  }

  ngOnInit(){
    console.log(this.cardContent.nativeElement);
    this.renderer.setElementStyle(
      this.cardContent.nativeElement,"webkitTransition","max-height 300ms, padding 300ms"
    );
  }

  toggle_adblock(){
    if(this.adblock_expanded){
      this.renderer.setElementStyle(this.cardContent.nativeElement,"max-height","0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement,"padding","0px 16px");
    }else{
      this.renderer.setElementStyle(this.cardContent.nativeElement,"max-height","500px");
      this.renderer.setElementStyle(this.cardContent.nativeElement,"padding","13px 16px");
    }
    this.adblock_expanded = !this.adblock_expanded;
  }

 



}
