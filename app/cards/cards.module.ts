import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CardsService } from './cards.service';

@NgModule({
    imports: [HttpModule],
    providers: [CardsService]
})
export class CardsModule {}

