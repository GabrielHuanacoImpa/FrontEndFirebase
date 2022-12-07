import { Injectable } from '@angular/core';
/*esto permite hacer llamados get y post a nuestro 
servidor montado en el puerto 5000*/
import {HttpClient, HttpHeaders} from '@angular/common/http';
/* lo siguieten es para decir que nuestro metodo es asincronico 
getEducacions(), por que asi es en la vida real*/
import {Observable, of} from 'rxjs'; /* asincronico, la base de datos lleva su tiempo en responder a la peticion*/
import {Educacion} from '../Educacion' //interface
import {EDUCACIONES} from '../mock-educaciones'; //lista de tareas

/*El servicio ya maneja todas las tareas ya no el componente*/
/* El componente solo llama a los servicios */
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
} /*mandamos un json al servidor*/


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiUrl = 'http://localhost:5003/educaciones';
  constructor(
    /*inicializamos el metodo*/
    private http: HttpClient
  ) { }

  /* devuelve la lista de tarea */
  getEducaciones(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.apiUrl)
  }
  deleteEducacion(educacion: Educacion): Observable<Educacion> {
    /*const url = '${this.apiUrl}/${educacion.id}';*/
    const url = `${this.apiUrl}/${educacion.id}`;
    return this.http.delete<Educacion>(url)
  }

  updateEducacionReminder(educacion: Educacion): Observable<Educacion> {
    const url = `${this.apiUrl}/${educacion.id}`;
    return this.http.put<Educacion>(url, educacion, httpOptions)
    /*lo maneja como json : indicado por httpOptions*/
    /*es para informarle al Backend que le estamos enviando un json en root*/
  }

  addEducacion(educacion: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(this.apiUrl, educacion, httpOptions);
  }
}
