import { Component, OnInit } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableDatepickerRenderComponent, SmartTableDatepickerComponent } from '../smart-table-datepicker/smart-table-datepicker.component';
import { Table } from 'src/app/model/table.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-data',
  templateUrl: './admin-data.component.html',
  styleUrls: ['./admin-data.component.css']
})
export class AdminDataComponent implements OnInit {

  private data: Array<Table> = [];
  private STORAGE_KEY: string = "admin-data";


  /*data = [
    {
      category: "AA",
      name: "Leanne Graham",
      comments: "Bret",
      date: "10/22/2019 8:00 PM",
      picture: "https://slika.nezavisne.rs/2018/12/750x450/20181226153911_515233.jpg",
    },
    {
      category: "BB",
      name: "Leanne Graham",
      comments: "Bret",
      date: "10/22/2019 8:00 PM",
      picture: "https://slika.nezavisne.rs/2018/12/750x450/20181226153911_515233.jpg",
      
    },
  
   
  ];*/

  settings = {
    actions: { 
      columnTitle: 'Opcije'
    },
    add: {
      addButtonContent: '<img src="/assets/img/icon-add.png">', 
      createButtonContent: '<img src="/assets/img/icon-check.png">',
      cancelButtonContent: '<img src="/assets/img/icon-close.png">',
    },
    edit: {
      editButtonContent: '<img src="/assets/img/icon-edit.png">',
      saveButtonContent: '<img src="/assets/img/icon-check.png">',
      cancelButtonContent: '<img src="/assets/img/icon-close.png">',
    },
    delete: {
      deleteButtonContent: '<img src="/assets/img/icon-delete.png">',
      confirmDelete: true,
    },
    columns: {
      category: {
        title: 'Kategorija',
        type: 'string',
              
      }, 

      name: {
        title: 'Naslov',
        type: 'string',
      },
      comments: {
        title: 'Opis',
        type: 'string',
      },
      
      date: {
        title: 'Datum i vrijeme',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        width: '150px',
        filter: false,
        sortDirection: 'desc',
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        }, 
    },
    
    picture: {
      title: 'Slika',
      type: 'html',
      valuePrepareFunction: (picture:string) => { return `<img width="200px" src="${picture}" />`; },
    },
  },


  noDataMessage: 'Nema podataka'
  
}
  

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: AdminService) {
    //this.data = loadFromLS
    console.log(this.service)
    this.data = this.service.loadFromLocalStorage(this.STORAGE_KEY);
    this.source = new LocalDataSource(this.data)
    this.source.onChanged().subscribe(()=>{
      console.log("DS CHANGED", this.data)
      //save to LS(this.data)
      this.service.saveToLocalStorage(this.STORAGE_KEY, this.data);
    })
  }
/*
  private saveToLocalStorage(){
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
  }
  
  private loadFromLocalStorage(){
    this.data = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    this.data.forEach(t=>{
      t.dueDate = new Date(t.dueDate);
    });
}*//*
  public addEvent(data: Table) {
    this.data.push(data);
   // this.saveToLocalStorage();
  }
  public getEvents() {
   // this.loadFromLocalStorage();
    return this.data;
  }*/

 

  




  onDeleteConfirm(event): void {
    if (window.confirm('Želite li izbrisati unos?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {
  }

}
