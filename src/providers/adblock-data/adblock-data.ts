import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the AdblockDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdblockDataProvider {
  private _ADblock:any;

  getADblock():any{
    return this._ADblock;
  }
  setADblock(adblock:any){
    console.log("added adblock");
    console.log(adblock);
    this._ADblock = adblock;
  }
  constructor() {
    console.log('Hello AdblockDataProvider Provider');
  }

}
