import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersLayoutComponent } from './layout/users-layout/users-layout.component';
import { DataComponent } from './components/data/data.component';

@NgModule({
  declarations: [PersonalInformationComponent, UsersLayoutComponent, DataComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
