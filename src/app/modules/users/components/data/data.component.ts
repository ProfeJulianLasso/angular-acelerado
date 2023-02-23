import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SateService } from '../../services/sate.service';

@Component({
  selector: 'sofka-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent {
  @Input()
  nombre: string;

  @Input()
  apellido: string;

  bandera: boolean;

  @Output('bandera-change')
  banderaChange: EventEmitter<boolean>;

  constructor(private sateService: SateService) {
    this.nombre = 'Luis';
    this.apellido = 'García';
    this.bandera = true;
    this.banderaChange = new EventEmitter<boolean>();
  }

  cambiarBandera() {
    this.bandera = !this.bandera;
    this.banderaChange.emit(this.bandera);
    this.sateService.nombre = 'Andres';
  }
}
