import { Client } from './../models/client.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  // for api call
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _http: HttpClient) {}

  getClients() {
    return this._http.get<any>('/');
  }

  addClient(client: Client) {
    return this._http.post<any>('/create', client, { headers: this.headers });
  }
}
