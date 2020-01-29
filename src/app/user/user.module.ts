import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { StartPageComponent } from './start-page/start-page.component';

import { AppMaterialModule } from '../app-material/app-material.module';
import { EventsComponent } from './events/events.component';
import { CityComponent } from './city/city.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';


@NgModule({
  declarations: [StartPageComponent, EventsComponent, CityComponent, GalleryComponent, ContactComponent,WeatherForecastComponent ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AppMaterialModule,
    NgImageSliderModule,
   
   
   
   
  ]
})
export class UserModule { }
