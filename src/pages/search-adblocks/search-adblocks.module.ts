import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchAdblocksPage } from './search-adblocks';

@NgModule({
  declarations: [
    SearchAdblocksPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchAdblocksPage),
  ],
})
export class SearchAdblocksPageModule {}
