import { Component } from '@angular/core';

declare var module: {
  id: string;
};

@Component({
  moduleId: module.id,
  selector: 'ngh-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent { 

}