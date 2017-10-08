import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuggestAdblocksPage } from './suggest-adblocks';

@NgModule({
  declarations: [
    SuggestAdblocksPage,
  ],
  imports: [
    IonicPageModule.forChild(SuggestAdblocksPage),
  ],
})
export class SuggestAdblocksPageModule {}
