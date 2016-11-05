import {
    Component
} from '@angular/core';

declare var module: {
    id: string;
}

@Component({
    moduleId: module.id,
    selector: 'ngh-heroes-list',
    templateUrl: './heroes-list.component.html',
    styleUrls: ['heroes-list.component.css']
})
export class HeroesListComponent {
    
}