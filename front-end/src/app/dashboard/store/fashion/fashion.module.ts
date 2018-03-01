import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashionComponent } from './fashion.component';
import { FashionRoutingModule } from './fashion-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FashionService } from './fashion.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FashionRoutingModule,
        Ng2SmartTableModule,
        FormsModule
    ],
    declarations: [FashionComponent],
    providers: [FashionService]
})

export class FashionModule { }
