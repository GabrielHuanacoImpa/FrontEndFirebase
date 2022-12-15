import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Educacion } from '../../Educacion';

@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.css']
})
export class AddEduComponent implements OnInit {
  @Output() onAddEdu:EventEmitter<Educacion> = new EventEmitter();

  institucion:string = "";
  titulo:string = "";
  domicilio:string = "";
  fecha_inicio:Date= new Date("0000-00-00");
  fecha_fin:Date = new Date("0000-00-00");
  image_institucion:string = "";
  ultima_actualizacion:Date = new Date("0000-00-00");
  reminder:boolean = false;
  persona_id:number  = 1;  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
      if(this.institucion.length === 0) {
        alert("Por favor ingrese una experiencia educativa");
        return
      }
  

      const {institucion,titulo,domicilio,fecha_inicio,fecha_fin,image_institucion,ultima_actualizacion,reminder,persona_id} = this
      const newEdu = {institucion,titulo,domicilio,fecha_inicio,fecha_fin,image_institucion,ultima_actualizacion,reminder,persona_id}
      this.onAddEdu.emit(newEdu); //envia objeto Educacion fuera del componenete, lo emite
  }
}
