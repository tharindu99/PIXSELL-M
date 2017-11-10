import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchAdblocksPage } from './search-adblocks';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    SearchAdblocksPage, 
  ],
  imports: [
    RoundProgressModule,
    IonicPageModule.forChild(SearchAdblocksPage),
  ],
})
export class SearchAdblocksPageModule {}
