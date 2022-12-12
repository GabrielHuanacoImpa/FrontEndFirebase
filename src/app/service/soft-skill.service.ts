import { Injectable } from '@angular/core';
/*esto permite hacer llamados get y post a nuestro 
servidor montado en el puerto 5000*/
import {HttpClient, HttpHeaders} from '@angular/common/http';
/* lo siguieten es para decir que nuestro metodo es asincronico 
getSoftSkills(), por que asi es en la vida real*/
import {Observable, of} from 'rxjs'; /* asincronico, la base de datos lleva su tiempo en responder a la peticion*/
import {SoftSkill} from '../SoftSkill' //interface
import {SOFTSKILLS} from '../mock-softSkills'; //lista de tareas

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
export class SoftSkillService {

  //private apiUrl = 'http://localhost:5005/soft-Skills';
  private apiUrl = 'http://localhost:8080/softskills/traer';
  constructor(
    /*inicializamos el metodo*/
    private http: HttpClient
  ) { }

  /* devuelve la lista de tarea */
  getSoftSkills(): Observable<SoftSkill[]> {
    return this.http.get<SoftSkill[]>(this.apiUrl)
  }
  deleteSoftSkill(softSkill: SoftSkill): Observable<SoftSkill> {
    /*const url = '${this.apiUrl}/${softSkill.id}';*/
    const url = `${this.apiUrl}/${softSkill.id}`;
    return this.http.delete<SoftSkill>(url)
  }

  updateSoftSkillReminder(softSkill: SoftSkill): Observable<SoftSkill> {
    const url = `${this.apiUrl}/${softSkill.id}`;
    return this.http.put<SoftSkill>(url, softSkill, httpOptions)
    /*lo maneja como json : indicado por httpOptions*/
    /*es para informarle al Backend que le estamos enviando un json en root*/
  }

  addSoftSkill(softSkill: SoftSkill): Observable<SoftSkill> {
    return this.http.post<SoftSkill>(this.apiUrl, softSkill, httpOptions);
  }
}
