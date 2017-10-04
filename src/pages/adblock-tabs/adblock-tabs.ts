import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TopPage } from '../top/top';
import { SuggestionsPage} from '../suggestions/suggestions';
import { SearchPage } from '../search/search';

@IonicPage()
@Component({
  selector: 'page-adblock-tabs',
  templateUrl: 'adblock-tabs.html'
})
export class AdblockTabsPage {

  topRoot:any = TopPage;
  suggestionsRoot:any = SuggestionsPage;
  searchRoot:any = SearchPage;


  constructor(public navCtrl: NavController) {}

}
