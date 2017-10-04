import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdblockTabsPage } from './adblock-tabs';

@NgModule({
  declarations: [
    AdblockTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdblockTabsPage),
  ]
})
export class AdblockTabsPageModule {}
