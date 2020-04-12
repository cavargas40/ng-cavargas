import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url = 'https://ng-cavargas.firebaseio.com';

  constructor(private httpClient: HttpClient) {}

  sendMessage(message) {
    return this.httpClient.post(`${this.url}/contacts.json`, message);
  }
}
