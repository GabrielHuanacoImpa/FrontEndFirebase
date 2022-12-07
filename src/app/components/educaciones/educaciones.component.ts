import { Component, OnInit } from '@angular/core';

import { EducacionService } from '../../service/educacion.service';

import {Educacion} from '../../Educacion' //interface


@Component({
  selector: 'app-educaciones',
  templateUrl: './educaciones.component.html',
  styleUrls: ['./educaciones.component.css']
})
export class EducacionesComponent implements OnInit {

  educaciones: Educacion[] = [];
  
  constructor(  
    /* inicializamos nuestro servicio */
    private educacionService: EducacionService
    ){}

  ngOnInit(): void {
    /* cuando se monte el componente, 
    vamos a llamar al  servicio, 
    guardamos la lista de tareas dentro de Educacion */
    this.educacionService.getEducaciones().subscribe((educaciones)=>(
        this.educaciones = educaciones)
      );
    /* el componente ya no esta manejando 
    la logica de las tareas */
    /*=> se agrego porque es asinbcronico la carga de la base de datos */
    /* metodo subscribe de los observables */
    /* Leemos de nuestro archivo de tareas
    obtenemos la lista de tareas a traves de un servicio 
    cuando se monta el componente de tarea */
  }

  deleteEducacion(educacion: Educacion){
    /*console.log("deleteEducacion");*/
    this.educacionService.deleteEducacion(educacion)
      .subscribe(
        ()=>(
        this.educaciones = this.educaciones.filter( (t) => {
        /*console.log("educacion delete");*/
        return t.id !== educacion.id
        })
      ))
  }

  toggleReminder(educacion: Educacion){
    educacion.reminder = !educacion.reminder;
    /*console.log(educacion.reminder)*/
    this.educacionService.updateEducacionReminder(educacion).subscribe();
    /*la logica lo manejamos en comppnenete y 
    se lo pasamos al servicio para que aga la terea*/
    /*el servicio habla con la base de datos
    la logica lo manejamos en el componenete*/
  }

  addEducacion(educacion: Educacion){
    //console.log(educacion); 
    // recibimos los datos de la tarea
    // esta tarea que recibimos aca deberiamos 
    // pasarla a un servicio que nos permita guardarla en la base de datos
    /* devuelve la tarea, la tarea se creo en un formulario
      pero la lista de tarea lo estoy manejando en otro 
      componente por eso debo agregar esta tarea no agregada
      debo agregarla al array de tareas, esta tarea que recien 
      esta insertada en la base de datos
    */

    this.educacionService.addEducacion(educacion).subscribe((educacion)=>(
        this.educaciones.push(educacion)
    ))
    //agrego la nueva tarea y se inserta en la base de datos

  }
}
