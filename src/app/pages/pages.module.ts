import { NgModule } from '@angular/core';

import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import { CommonModule }                     from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule }                  from '@angular/material/button';
import { MatCheckboxModule }                from '@angular/material/checkbox';
import { MatDialogModule }                  from '@angular/material/dialog';
import { MatFormFieldModule }               from '@angular/material/form-field';
import { MatIconModule }                    from '@angular/material/icon';
import { MatInputModule }                   from '@angular/material/input';
import { MatListModule }                    from '@angular/material/list';
import { MatSelectModule }                  from '@angular/material/select';
import { MatSlideToggleModule }             from '@angular/material/slide-toggle';
import { MatSnackBarModule }                from '@angular/material/snack-bar';
import { MatStepperModule }                 from '@angular/material/stepper';
import { MatTabsModule }                    from '@angular/material/tabs';
import { RouterModule }                     from '@angular/router';
import { SharedModule }                     from '../shared/shared.module';

import { AccordionComponent }               from '../shared/components/accordion/accordion.component';
import { CandidatosComponent }              from './candidatos/candidatos.component';
import { CreateVagaComponent }              from './create-vaga/create-vaga.component';
import { EmpresaComponent }                 from './empresa/empresa.component';
import { Empresa2Component }                from './empresa2/empresa2.component';
import { EmptyComponent }                   from '../shared/components/empty/empty.component';
import { ModalVagasComponent }                   from '../shared/components/modal-vagas/modal-vagas.component';
import { ModalCandidatosComponent }                   from '../shared/components/modal-candidatos/modal-candidatos.component';
import { NivelUsuarioComponent }            from './nivel-usuario/nivel-usuario.component';
import { VagasComponent }                   from './vagas/vagas.component';


@NgModule({
  declarations: [
      CandidatosComponent,
      CreateVagaComponent,
      EmpresaComponent,
      Empresa2Component,
      NivelUsuarioComponent,
      VagasComponent
  ],
  imports: [
      BrowserAnimationsModule,
      CommonModule,
      FormsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatDialogModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatSelectModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatStepperModule,
      MatTabsModule,
      ReactiveFormsModule,
      RouterModule,
      SharedModule
  ],
  entryComponents: [
      AccordionComponent,
      EmptyComponent,
      ModalVagasComponent,
      ModalCandidatosComponent
  ]
})
export class PagesModule { }
