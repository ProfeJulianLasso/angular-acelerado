import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SateService {
  private _nombre: string;
  changeNombre: EventEmitter<string>;

  constructor() {
    this._nombre = localStorage.getItem('state.nombre') ?? 'Lalo landa';
    this.changeNombre = new EventEmitter<string>();
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
    localStorage.setItem('state.nombre', value);
    this.changeNombre.emit(this._nombre);
  }
}
