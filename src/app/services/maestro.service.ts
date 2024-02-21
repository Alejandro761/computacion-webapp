import { Injectable } from '@angular/core';
import { ValidatorService } from './tools/validator.service';
import { ErrorsService } from './tools/errors.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaestroService {

  constructor(
    private http: HttpClient,
    private validatorService: ValidatorService,
    private errorsService: ErrorsService
  ) { }

  public esquemaMaestro () {
    return {
      'rol':'',
      'clave_maestro': '',
      'first_name': '',
      'last_name': '',
      'email': '',
      'password': '',
      'confirmar_password': '',
      'telefono': '',
      'rfc': '',
      'cubiculo': '',
      'ocupacion': '',
      'subjects': [],
      // 'materiasSelected': [],
      'area': '',
      // 'areasSelected': []
    }
  }

  //Validación para el formulario
  public validarMaestro(data: any, editar: boolean){
    console.log("Validando maestro... ", data);
    let errors: any = [];

    if(!this.validatorService.required(data["clave_maestro"])){
      errors["clave_maestro"] = this.errorsService.required;
    }

    if(!this.validatorService.required(data["first_name"])){
      errors["first_name"] = this.errorsService.required;
    }

    if(!this.validatorService.required(data["last_name"])){
      errors["last_name"] = this.errorsService.required;
    }

    if(!this.validatorService.required(data["email"])){
      errors["email"] = this.errorsService.required;
    }else if(!this.validatorService.max(data["email"], 40)){
      errors["email"] = this.errorsService.max(40);
    }else if (!this.validatorService.email(data['email'])) {
      errors['email'] = this.errorsService.email;
    }

    if(!editar){
      if(!this.validatorService.required(data["password"])){
        errors["password"] = this.errorsService.required;
      }

      if(!this.validatorService.required(data["confirmar_password"])){
        errors["confirmar_password"] = this.errorsService.required;
      }
    }

    if(!this.validatorService.required(data["rfc"])){
      errors["rfc"] = this.errorsService.required;
    }else if(!this.validatorService.min(data["rfc"], 12)){
      errors["rfc"] = this.errorsService.min(12);
      alert("La longitud de caracteres deL RFC es menor, deben ser 12");
    }else if(!this.validatorService.max(data["rfc"], 13)){
      errors["rfc"] = this.errorsService.max(13);
      alert("La longitud de caracteres deL RFC es mayor, deben ser 13");
    }

    if(!this.validatorService.required(data["cubiculo"])){
      errors["cubiculo"] = this.errorsService.required;
    }

    if(!this.validatorService.required(data["telefono"])){
      errors["telefono"] = this.errorsService.required;
    }

    if(!this.validatorService.required(data["ocupacion"])){
      errors["ocupacion"] = this.errorsService.required;
    }

    if(!this.validatorService.required(data["fecha_nacimiento"])){
      errors["fecha_nacimiento"] = this.errorsService.required;
    }

    if(!this.validatorService.required(data["subjects"])){
      errors["subjects"] = this.errorsService.required;
    }

    if(!this.validatorService.required(data["area"])){
      // console.log('area ' + data['area']);
      errors["area"] = this.errorsService.required;
    }

    //Return arreglo
    return errors;
  }
}
