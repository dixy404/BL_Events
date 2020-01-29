import { Injectable } from '@angular/core';
import { Table } from '../model/table.model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }


  public saveToLocalStorage(key: string, data: Array<any>) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public loadFromLocalStorage(key: string) {
    let data = JSON.parse(localStorage.getItem(key)) || [];
    data.forEach(t => {
      if ('date' in t)
        t.date = new Date(t.date);
    });
    return data;
  }
}
