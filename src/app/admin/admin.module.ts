import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { AdminDataComponent } from './admin-data/admin-data.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from './smart-table-datepicker/smart-table-datepicker.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppMaterialModule } from '../app-material/app-material.module';




@NgModule({
  declarations: [AdminContainerComponent, AdminDataComponent, SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    Ng2SmartTableModule  
  ],

  entryComponents: [
    SmartTableDatepickerComponent,
    SmartTableDatepickerRenderComponent
  ]
  
})
export class AdminModule { }
