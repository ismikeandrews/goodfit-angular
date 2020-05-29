import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MenuComponent, ContentComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ]
})
export class LayoutModule { }
