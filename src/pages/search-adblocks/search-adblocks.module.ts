import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchAdblocksPage } from './search-adblocks';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { AdBlockViewComponent } from '../../components/ad-block-view/ad-block-view';


@NgModule({
  declarations: [
    SearchAdblocksPage,
    AdBlockViewComponent 
  ],
  imports: [
    RoundProgressModule,
    IonicPageModule.forChild(SearchAdblocksPage),
  ],
})
export class SearchAdblocksPageModule {}
