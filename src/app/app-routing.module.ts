import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './layout/content/content.component';
import { VagasComponent } from './pages/vagas/vagas.component';
import { NivelUsuarioComponent } from './pages/nivel-usuario/nivel-usuario.component';

const routes: Routes = [
  {path: '', component: ContentComponent, 
    children: [
      {path: 'vagas', component: VagasComponent},
      {path: 'nivel-usuario', component: NivelUsuarioComponent},
    ]
  },
  {path: 'nivel-usuario', component: NivelUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
