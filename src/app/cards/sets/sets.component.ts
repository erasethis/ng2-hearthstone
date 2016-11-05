import {
    Component
} from '@angular/core';

declare var module: {
    id: string;
}

@Component({
    moduleId: module.id,
    selector: 'ngh-sets',
    templateUrl: './sets.component.html',
    styleUrls: ['sets.component.css']
})
export class SetsComponent {
    
}