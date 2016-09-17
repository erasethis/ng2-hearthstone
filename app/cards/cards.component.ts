import { Component } from '@angular/core';

declare var module: {
    id: string;
}

@Component({
    moduleId: module.id,
    templateUrl: 'cards.component.html',
    styleUrls: ['cards.component.css']
})
export class CardsComponent {}