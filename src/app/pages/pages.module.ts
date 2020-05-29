import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagasComponent } from './vagas/vagas.component';
import { NivelUsuarioComponent } from './nivel-usuario/nivel-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../shared/components/modal/modal.component';

@NgModule({
  declarations: [VagasComponent, NivelUsuarioComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    MatDialogModule
  ],
  entryComponents: [
    ModalComponent,
  ]
})
export class PagesModule { }
