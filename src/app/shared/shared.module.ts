import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule }            from '@angular/common';

import { AccordionComponent }      from './components/accordion/accordion.component';
import { DescriptionBoxComponent } from './components/description-box/description-box.component';
import { EmptyComponent }          from './components/empty/empty.component';
import { MatButtonModule }         from '@angular/material/button';
import { MatExpansionModule }      from '@angular/material/expansion';
import { MatIconModule }           from '@angular/material/icon';
import { MatTabsModule }           from '@angular/material/tabs';
import { ModalVagasComponent }          from './components/modal-vagas/modal-vagas.component';
import { ModalCandidatosComponent }          from './components/modal-candidatos/modal-candidatos.component';

@NgModule({
    declarations: [
        AccordionComponent,
        DescriptionBoxComponent,
        EmptyComponent,
        ModalVagasComponent,
        ModalCandidatosComponent,
    ],
    exports: [
        AccordionComponent,
        DescriptionBoxComponent,
        EmptyComponent,
        ModalVagasComponent,
        ModalCandidatosComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatTabsModule
    ]
})

export class SharedModule { }
