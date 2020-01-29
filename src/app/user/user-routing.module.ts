import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartPageComponent } from './start-page/start-page.component';
import { EventsComponent } from './events/events.component';
import { CityComponent } from './city/city.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';




const routes: Routes = [
  {
    path: '',          
    component: StartPageComponent,
    children: [
      {
        path: '',
        component: EventsComponent,
      },
      {
        path: 'city',
        component: CityComponent,
      },
      {
        path: 'gallery',
        component: GalleryComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },  

    ]
  }
    
    ]
  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
