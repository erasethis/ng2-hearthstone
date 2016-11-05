import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routing';

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes),
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }

