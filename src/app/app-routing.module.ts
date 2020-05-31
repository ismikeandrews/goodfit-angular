import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './layout/content/content.component';
import { VagasComponent } from './pages/vagas/vagas.component';
import { NivelUsuarioComponent } from './pages/nivel-usuario/nivel-usuario.component';
import { CreateVagaComponent } from './pages/create-vaga/create-vaga.component';
import { CandidatosComponent } from './pages/candidatos/candidatos.component';


const routes: Routes = [
  {path: '', component: ContentComponent, 
    children: [
      {path: 'vagas', component: VagasComponent},
      {path: 'vagas/create', component: CreateVagaComponent},
      {path: 'nivel-usuario', component: NivelUsuarioComponent},
      {path: 'candidatos', component: CandidatosComponent},
    ]
  },
  {path: 'nivel-usuario', component: NivelUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
