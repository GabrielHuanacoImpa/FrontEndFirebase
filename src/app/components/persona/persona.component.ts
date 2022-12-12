import { Component, OnInit } from '@angular/core';

import {PersonaService} from 'src/app/service/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  personaList: any  = [];
  constructor(private PersonaService: PersonaService){
    console.log('El componente se ha creado');
  }
  /*
  ngOnInit es el método que nos permitirá interaccionar 
  con el componente una vez se ha inicializado dicho componente.
  */
  ngOnInit(): void {
      console.log('El componente se ha inicializado');
      //this.PersonaService.getPersona().subscribe((response: any) => console.log(response));
      this.PersonaService.getPersona().subscribe((response: any) => this.personaList = response);
  }


}
