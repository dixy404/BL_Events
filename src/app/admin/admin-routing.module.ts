import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { SmartTableDatepickerComponent } from './smart-table-datepicker/smart-table-datepicker.component';
import { AdminDataComponent } from './admin-data/admin-data.component';


const routes: Routes = [
  {
    path: '',          
    component: AdminContainerComponent,
    children: [
      {
        path: '',
        component: AdminDataComponent,
      },
      { 
        path: 'table',
        component: AdminDataComponent,
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
