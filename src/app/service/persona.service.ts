import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { 
    console.log('Servicio HTTTP');
  }

  getPersona(): any {
    return this.http.get('http://localhost:8080/personas/traer');
  }

}
