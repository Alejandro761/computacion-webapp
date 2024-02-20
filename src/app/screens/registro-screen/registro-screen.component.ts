import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss']
})
export class RegistroScreenComponent implements OnInit{
  public tipo: string = 'registro-usuarios';
  public user:any = {}; //any significa que sera de tipo objeto JSON
  public tipo_user: string = '';
  public isAdmin: boolean = false;
  public isAlumno: boolean = false;
  public isMaestro: boolean = false;

  constructor(){}

  ngOnInit(): void {

  }

  public radioChange(event: MatRadioChange) { //esta función tiene como parametro un evento (event) de tipo MatRadioChange
    console.log(event); //se imprime lo que cacho el evento, esto fue un matradiochange
    // console.log(this.user);
    //el objeto event, que es un matradiochange, tiene el atributo value que necesitamos, este atributo lo tomo durante el evento
    if (event.value == 'administrador') {
      this.isAdmin = true;
      this.isAlumno = false;
      this.isMaestro = false;
    } else if (event.value == 'alumno') {
      this.isAdmin = false;
      this.isAlumno = true;
      this.isMaestro = false;
    } else if (event.value == 'maestro') {
      this.isAdmin = false;
      this.isAlumno = false;
      this.isMaestro = true;
    }
  }
}
