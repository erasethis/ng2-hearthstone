import { Component } from '@angular/core';

declare var module: {
  id: string;
};

@Component({
  moduleId: module.id,
  selector: 'ngh-app',
  template: `
    <div class="ngh-viewport">
      <md-sidenav-layout>
        <div class="ngh-app-bar">
          <button class="ngh-sidenav-toggle" #toggle (click)="left.open()">
            <md-icon>menu</md-icon>
          </button>
          <span class="ngh-title">Angular 2 Hearthstone</span>
        </div>
        <md-sidenav class="ngh-sidenav-left" #left></md-sidenav>
        <router-outlet></router-outlet>
      </md-sidenav-layout>
    </div>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent { 

}