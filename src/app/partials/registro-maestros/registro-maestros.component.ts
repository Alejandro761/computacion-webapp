import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registro-maestros',
  templateUrl: './registro-maestros.component.html',
  styleUrls: ['./registro-maestros.component.scss']
})
export class RegistroMaestrosComponent {
  @Input () rol: string = ''; //input sirve para comunicar el componente con otro componente

}
