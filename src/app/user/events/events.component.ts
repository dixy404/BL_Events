import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  


  /*public data: Array<any> = [];

  constructor(
    private service: AdminService) { 
    this.data = this.service.loadFromLocalStorage('admin-data')
  }*/


  
  public data: Array<any> = [];
  public todaysEvents: Array<any>  = [];
  public futureEvents: Array<any>  = [];

constructor(private service: AdminService) {
  /*this.data = this.service.loadFromLocalStorage('admin-data')*/
}


  ngOnInit() {
  }

  todayEvents(){
      this.data = this.service.loadFromLocalStorage('admin-data')
        .filter(t => {
          return (t.date &&
            t.date.getDate() == new Date().getDate() &&
            t.date.getMonth() == new Date().getMonth() &&
            t.date.getFullYear() == new Date().getFullYear());
        });
        
    }
    futureEvent(){
      this.data=this.service.loadFromLocalStorage('admin-data').filter(e=>e.date>new Date())
     
    }

   

    
    }
  

    




