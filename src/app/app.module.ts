import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage} from '../pages/login/login';
import { AboutPage} from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdBlocksPage } from '../pages/ad-blocks/ad-blocks';
import { AdblockTabsPage } from '../pages/adblock-tabs/adblock-tabs';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase,AngularFireDatabaseModule } from 'angularfire2/database';

export const firbaseConfig = {
  apiKey: "AIzaSyAmCUFZR-oF8eqxhY24_iVtF_cZES4Tz8s",
  authDomain: "pixsell-m.firebaseapp.com",
  databaseURL: "https://pixsell-m.firebaseio.com",
  projectId: "pixsell-m",
  storageBucket: "pixsell-m.appspot.com",
  messagingSenderId: "85658630439"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AboutPage,
    AdBlocksPage,
    AdblockTabsPage
    
   

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firbaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AboutPage,
    AdBlocksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   
  ]
})
export class AppModule {}


