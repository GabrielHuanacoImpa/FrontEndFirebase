import { Injectable } from '@angular/core';
/*esto permite hacer llamados get y post a nuestro 
servidor montado en el puerto 5000*/
import {HttpClient, HttpHeaders} from '@angular/common/http';
/* lo siguieten es para decir que nuestro metodo es asincronico 
getProyectos(), por que asi es en la vida real*/
import {Observable, of} from 'rxjs'; /* asincronico, la base de datos lleva su tiempo en responder a la peticion*/
import {Proyecto} from '../Proyecto' //interface
import {PROYECTOS} from '../mock-proyectos'; //lista de tareas

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
export class ProyectoService {

  //private apiUrl = 'http://localhost:5007/proyectos';
  private apiUrl = 'http://localhost:8080/proyecto/traer';
  private apiCrear = 'http://localhost:8080/proyecto/crear';
  constructor(
    /*inicializamos el metodo*/
    private http: HttpClient
  ) { }

  /* devuelve la lista de tarea */
  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.apiUrl)
  }
  deleteProyecto(proyecto: Proyecto): Observable<Proyecto> {
    /*const url = '${this.apiUrl}/${proyecto.id}';*/
    const url = `${this.apiUrl}/${proyecto.id}`;
    return this.http.delete<Proyecto>(url)
  }

  updateProyectoReminder(proyecto: Proyecto): Observable<Proyecto> {
    const url = `${this.apiUrl}/${proyecto.id}`;
    return this.http.put<Proyecto>(url, proyecto, httpOptions)
    /*lo maneja como json : indicado por httpOptions*/
    /*es para informarle al Backend que le estamos enviando un json en root*/
  }

  addProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.apiCrear, proyecto, httpOptions);
  }
}
