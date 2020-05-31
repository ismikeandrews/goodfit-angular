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
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@NgModule({
  declarations: [VagasComponent, NivelUsuarioComponent, CreateVagaComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatStepperModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatSlideToggleModule
  ],
  entryComponents: [
    ModalComponent,
  ]
})
export class PagesModule { }
