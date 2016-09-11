import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { Routes, RouterModule }  from '@angular/router';

import { MdCoreModule }    from '@angular2-material/core';
import { MdIcon, MdIconRegistry }    from '@angular2-material/icon';
import { MdSidenavModule } from '@angular2-material/sidenav';

import { CardsModule }   from './cards/cards.module';

import { AppComponent }  from './app.component';
import { SearchComponent } from './search/search.component';

import { 
    routing, 
    appRoutingProviders 
} from './app.routing';

@NgModule({
  imports: [ 
      BrowserModule, 
      CommonModule, 
      FormsModule,
      HttpModule,
      RouterModule, 
      // 
      MdCoreModule,
      MdSidenavModule,
      //
      CardsModule,
      routing
  ],
  declarations: [ 
      AppComponent,
      MdIcon,
      SearchComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ 
      MdIconRegistry,
      appRoutingProviders ]
})
export class AppModule { }