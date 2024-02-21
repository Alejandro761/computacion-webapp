import { Component, Input, OnInit } from '@angular/core';
import { MaestroService } from 'src/app/services/maestro.service';
declare let $: any;

@Component({
  selector: 'app-registro-maestros',
  templateUrl: './registro-maestros.component.html',
  styleUrls: ['./registro-maestros.component.scss']
})
export class RegistroMaestrosComponent implements OnInit {
  @Input () rol: string = ''; //input sirve para comunicar el componente con otro componente

  public maestro: any = {};
  public editar: boolean = false;
  public errors: any = {};

  public subjects: any[] = [
    {value: '1', name: 'Aplicaciones Web'},
    {value: '2', name: 'Programación 1'},
    {value: '3', name: 'Bases de datos'},
    {value: '4', name: 'Tecnologías Web'},
    {value: '5', name: 'Minería de datos'},
    {value: '6', name: 'Desarrollo móvil'},
    {value: '7', name: 'Estructuras de datos'},
    {value: '8', name: 'Administración de redes'},
    {value: '9', name: 'Ingeniería de Software'},
    {value: '10', name: 'Administración de S.O.'},
  ];

  public areas: any[] = [
    {value: '1', name: 'Desarrollo Web'},
    {value: '2', name: 'Programación'},
    {value: '3', name: 'Base de datos'},
    {value: '4', name: 'Redes'},
    {value: '5', name: 'Matemáticas'},
  ]

  //Para contraseñas
  public hide_1: boolean = false;
  public hide_2: boolean = false;
  public inputType_1: string = 'password';
  public inputType_2: string = 'password';

  constructor (
    // private administradoresService: AdministradorService
    private maestrosService: MaestroService
  ){}

  ngOnInit(): void {
    this.maestro = this.maestrosService.esquemaMaestro();
    this.maestro.rol = this.rol;
    console.log(this.maestro);
  }

  public regresar () {

  }

  public registrar () {
    this.errors = [];
    // console.log('area an registgro() ' + this.maestro.area);
    this.errors = this.maestrosService.validarMaestro(this.maestro, this.editar);

    if (!$.isEmptyObject(this.errors)) {
      return false;
    }

    // TODO: luego registraremos al maestro
  }

  public actualizar () {

  }

  public checkboxChange(event:any){
    console.log("Evento: ", event);
    // this.subjects = []
    if(event.checked){
      this.maestro.subjects.push(event.source.value);
    }else{
      console.log('event value: ' + event.source.value);
      this.maestro.subjects.forEach((materia, i) => {
        if(materia == event.source.value){
          console.log('materia ' + materia);
          console.log('posicion: ' + i);
          this.maestro.subjects.splice(i,1);
        }
      });
    }
    console.log("Array subjects: ", this.maestro.subjects);
  }

  public selectChange(event:any){
    console.log("Evento: ", event);
    if (event.isUserInput) {
      this.maestro.area = event.source.value;
      // console.log('verdadero, presionaste esta opcion: ' + this.maestro.area);
    }
    console.log('area seleccionada: ' + this.maestro.area);
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
