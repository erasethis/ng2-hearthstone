import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { CommonModule }           from '@angular/common';
import { HttpModule }             from '@angular/http';
import { MaterialModule }         from '@angular/npm_material';
import { RouterModule }           from '@angular/router';

import { HomeModule }             from './home/home.module';
import { CardsModule }            from './cards/cards.module';

import { NgReduxModule, NgRedux } from 'ng2-redux';
import { ng2HearthstoneApp }      from './store/ng2-hearthstone.app';
import * as createLogger          from 'redux-logger';
import thunkMiddleware            from 'redux-thunk'
import { IAppState }              from './store/app-state.model'

import { AppComponent }           from './app.component';
import { appRoutes }              from './app.routing';

@NgModule({
  imports: [ 
      BrowserModule, 
      CommonModule,
      HttpModule,
      MaterialModule.forRoot(),
      RouterModule.forRoot(appRoutes), 
      //
      NgReduxModule,
      //
      HomeModule,
      CardsModule
  ],
  declarations: [ 
      AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(ngRedux: NgRedux<IAppState>) {
        ngRedux.configureStore(ng2HearthstoneApp, { 
            searchCards: { 
                searching: false, 
                keyword: '', 
                items: []
            }
        }, [thunkMiddleware, createLogger()]);
    }
}