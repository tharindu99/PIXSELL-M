import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopAdblocksPage } from './top-adblocks';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    TopAdblocksPage, 
  ],
  imports: [
    RoundProgressModule,
    IonicPageModule.forChild(TopAdblocksPage),
  ],
})
export class TopAdblocksPageModule {
}
