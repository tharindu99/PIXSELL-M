import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the AdblockTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adblock-tabs',
  templateUrl: 'adblock-tabs.html'
})
export class AdblockTabsPage {

  topAdblocksRoot = 'TopAdblocksPage'
  suggestAdblocksRoot = 'SuggestAdblocksPage'
  searchAdblocksRoot = 'SearchAdblocksPage'


  constructor(public navCtrl: NavController) {}

}
