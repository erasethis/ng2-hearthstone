import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { Routes, RouterModule }  from '@angular/router';

import { MdButtonModule }  from '@angular2-material/button';
import { MdCoreModule }    from '@angular2-material/core';
import { MdIcon, MdIconRegistry }    from '@angular2-material/icon';
import { MdInputModule }   from '@angular2-material/input';
import { MdSidenavModule } from '@angular2-material/sidenav';

import { NgReduxModule, NgRedux } from 'ng2-redux';
import { searchReducer } from './store/search.reducer';
import * as createLogger from 'redux-logger';

interface IAppState { /* ... */ };

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
      MdButtonModule,
      MdCoreModule,
      MdInputModule,
      MdSidenavModule,
      //
      NgReduxModule,
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
export class AppModule { 
    constructor(ngRedux: NgRedux<IAppState>) {
        ngRedux.configureStore(searchReducer, {}, [ createLogger() ]);
    }
}