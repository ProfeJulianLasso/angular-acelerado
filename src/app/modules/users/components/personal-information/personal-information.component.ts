import { Component, OnDestroy, OnInit } from '@angular/core';
import { SateService } from '../../services/sate.service';

@Component({
  selector: 'sofka-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent implements OnInit, OnDestroy {
  name: string;
  lastname: string;
  flag: boolean;

  constructor(private sateService: SateService) {
    this.name = this.sateService.nombre;
    this.lastname = 'Lasso';
    this.flag = true;
  }

  ngOnInit(): void {
    this.sateService.changeNombre.subscribe((value) => (this.name = value));
  }

  ngOnDestroy(): void {
    this.sateService.changeNombre.unsubscribe();
  }

  changeFlag(flag: boolean) {
    this.flag = flag;
  }
}
