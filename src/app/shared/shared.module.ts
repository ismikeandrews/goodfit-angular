import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ModalComponent } from './components/modal/modal.component';
import { DescriptionBoxComponent } from './components/description-box/description-box.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [AccordionComponent, ModalComponent, DescriptionBoxComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatTabsModule
  ]
})
export class SharedModule { }
