import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuggestAdblocksPage } from './suggest-adblocks';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    SuggestAdblocksPage,
  ],
  imports: [
    RoundProgressModule,
    IonicPageModule.forChild(SuggestAdblocksPage),
  ],
})
export class SuggestAdblocksPageModule {}
