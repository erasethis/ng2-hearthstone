import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'cards', pathMatch: 'full' },
    { path: 'cards', loadChildren: './cards/cards.module#CardsModule' },
    // { path: '**', redirectTo: '', pathMatch: 'full' },
];
