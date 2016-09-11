import { 
    Routes,
    RouterModule 
} from '@angular/router';

import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
    { path: '', component: SearchComponent }
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
