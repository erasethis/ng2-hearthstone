import {
    Component
} from '@angular/core';

declare var module: {
    id: string;
}

@Component({
    moduleId: module.id,
    selector: 'ngh-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['heroes.component.css']
})
export class HeroesComponent {
    
}