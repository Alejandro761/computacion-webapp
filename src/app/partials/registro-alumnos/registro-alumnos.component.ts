import { Component, Input, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';

declare let $: any;

@Component({
  selector: 'app-registro-alumnos',
  templateUrl: './registro-alumnos.component.html',
  styleUrls: ['./registro-alumnos.component.scss']
})

export class RegistroAlumnosComponent implements OnInit {
  @Input () rol: string = '';

  public alumno: any = {};
  public editar: boolean = false;
  public errors: any = {};
  //Para contraseñas
  public hide_1: boolean = false;
  public hide_2: boolean = false;
  public inputType_1: string = 'password';
  public inputType_2: string = 'password';

  constructor (
    private alumnosService: AlumnoService
  ){}

  ngOnInit(): void {
    this.alumno = this.alumnosService.esquemaAlumno();
    this.alumno.rol = this.rol
    console.log(this.alumno);
  }

  public regresar () {

  }

  public registrar () {
    this.errors = [];
    this.errors = this.alumnosService.validarAlumno(this.alumno, this.editar);

    if (!$.isEmptyObject(this.errors)) {
      return false; //  ! termina la función ???
    }
    console.log(this.errors);
    // TODO: luego registraremos al alumno
  }

  public actualizar () {

  }

  showPassword() {
    if (this.inputType_1 == 'password') {
      this.inputType_1 = 'text';
      this.hide_1 = true;
      //cuando el hide este en true, hara que el icono del ojo se muestre tachado
    } else {
      this.inputType_1 = 'password';
      this.hide_1 = false;
    }
  }

  showPwdConfirmar () {
    if (this.inputType_2 == 'password') {
      this.inputType_2 = 'text';
      this.hide_2 = true;
    } else {
      this.inputType_2 = 'password';
      this.hide_2 = false;
    }
  }
}
