import { Component, Input, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/services/administrador.service';
declare let $: any;

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.scss']
})

export class RegistroAdminComponent implements OnInit{
  @Input () rol: string = ''; //input sirve para comunicar el componente con otro componente

  public admin: any = {};
  public editar: boolean = false;
  public errors: any = {};
  //Para contraseñas
  public hide_1: boolean = false;
  public hide_2: boolean = false;
  public inputType_1: string = 'password';
  public inputType_2: string = 'password';

  constructor (
    private administradoresService: AdministradorService
  ){}

  ngOnInit(): void {
    this.admin = this.administradoresService.esquemaAdmin();
    this.admin.rol = this.rol;
    console.log(this.admin);
  }

  public regresar () {

  }

  public registrar () {
    this.errors = [];

    this.errors = this.administradoresService.validarAdmin(this.admin, this.editar);

    if (!$.isEmptyObject(this.errors)) {
      return false;
    }

    // TODO: luego registraremos al admin
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
