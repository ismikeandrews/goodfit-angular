import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VagasComponent } from './vagas/vagas.component';
import { NivelUsuarioComponent } from './nivel-usuario/nivel-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreateVagaComponent } from './create-vaga/create-vaga.component';
import { CandidatosComponent } from './candidatos/candidatos.component';


@NgModule({
  declarations: [VagasComponent, NivelUsuarioComponent, CreateVagaComponent, CandidatosComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  entryComponents: [
    ModalComponent,
  ]
})
export class PagesModule { }
