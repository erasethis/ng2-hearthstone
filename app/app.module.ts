import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { Routes, RouterModule }  from '@angular/router';

import { CardsModule }   from './cards/cards.module';

import { AppComponent }  from './app.component';
import { SearchComponent } from './search/search.component';

import { 
    routing, 
    appRoutingProviders 
} from './app.routing';

@NgModule({
  imports:      [ 
      BrowserModule, 
      CommonModule, 
      FormsModule,
      HttpModule,
      RouterModule, 
      //
      CardsModule,
      routing
  ],
  declarations: [ 
      AppComponent,
      SearchComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ appRoutingProviders ]
})
export class AppModule { }