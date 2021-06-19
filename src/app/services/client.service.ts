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

  getClientById(id: string) {
    return this._http.get<any>(`/clients/${id}`);
  }

  addClient(client: Client) {
    return this._http.post<any>('/', client);
  }

  updateClient(client: Client) {
    return this._http.put<any>(`/clients/${client._id}`, client, {
      headers: this.headers,
    });
  }

  deleteClient(id: string) {
    return this._http.delete<any>(`/clients/${id}`, { headers: this.headers });
  }
}
