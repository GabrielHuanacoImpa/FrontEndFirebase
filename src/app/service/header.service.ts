import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) { 
    console.log('Servicio HTTTP');
  }

  getHeader(): any {
    return this.http.get('http://localhost:8080/personas/traer');
  }
}
