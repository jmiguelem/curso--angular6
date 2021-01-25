import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() destino: DestinoViaje;
  //Lo que genere se le pondra el atributo cssClass
  @HostBinding('attr.class') cssClass ="col-md-4";

  constructor() { 
    this.destino.nombre = "Nombre por defecto"
  }

  ngOnInit(): void {
  }

}
