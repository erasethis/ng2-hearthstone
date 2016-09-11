import { Component } from '@angular/core';

declare var module: {
  id: string;
};

@Component({
  moduleId: module.id,
  selector: 'ngh-app',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent { 

}