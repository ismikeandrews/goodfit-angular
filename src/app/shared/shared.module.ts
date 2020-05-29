import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ModalComponent } from './components/modal/modal.component';
import { DescriptionBoxComponent } from './components/description-box/description-box.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [AccordionComponent, ModalComponent, DescriptionBoxComponent],
  exports: [ModalComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTabsModule
  ]
})
export class SharedModule { }
