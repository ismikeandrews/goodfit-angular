import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagasComponent } from './vagas/vagas.component';
import { NivelUsuarioComponent } from './nivel-usuario/nivel-usuario.component';
import { ModalComponent } from '../shared/components/modal/modal.component';


@NgModule({
  declarations: [VagasComponent, NivelUsuarioComponent, ModalComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
