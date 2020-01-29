import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  public data: Array<any> =[]
  sourceImg: string

  
  constructor(private http:HttpClient) {
  }
   

  ngOnInit() {

    this.http.get("https://api.openweathermap.org/data/2.5/weather?q=Banja+Luka,ba&units=metric&APPID=470f0e0dd9b8cc1d45569b847891effe")
    .subscribe(
      (result: any)=> {
        console.log(result)
        this.data.push(result)
        this.sourceImg = "http://openweathermap.org/img/w/" + result.weather[0].icon + ".png";
       
       
      })
    }
  }

   
    
  


     


