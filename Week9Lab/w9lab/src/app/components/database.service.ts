import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeleteSenderComponent } from './delete-sender/delete-sender.component';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
const URL_BACKEND = "http://localhost:8081";
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }
  addParcel(data: any) {
    let url = URL_BACKEND + '/sender/parcel';
    return this.http.put(url, data, httpOptions);
  }

  addSender(data: any) {
    let url = URL_BACKEND + '/sender';
    return this.http.post(url, data, httpOptions);
  }
  
  getParcels() {let url = URL_BACKEND + '/parcel';
    return this.http.get(url)
  }

  getSenders() {
    let url = URL_BACKEND + '/sender';
    return this.http.get(url);
  }
  deleteSender(data:any) {
    let url = URL_BACKEND+ "/sender/" + data;
    return this.http.delete(url, httpOptions);
  }







}
