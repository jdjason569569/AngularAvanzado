import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuardarEmailComponent } from './components/guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './components/mostrar-email/mostrar-email.component';
import { MainEmailComponent } from './components/main-email/main-email.component';



@NgModule({
  declarations: [
    GuardarEmailComponent,
    MostrarEmailComponent,
    MainEmailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GuardarEmailComponent,
    MostrarEmailComponent,
    MainEmailComponent
  ]
})
export class ModuloEmailModule { }
