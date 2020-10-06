import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './layout/content/content.component';
import { VagasComponent } from './pages/vagas/vagas.component';
import { NivelUsuarioComponent } from './pages/nivel-usuario/nivel-usuario.component';
import { CreateVagaComponent } from './pages/create-vaga/create-vaga.component';
import { CandidatosComponent } from './pages/candidatos/candidatos.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { Empresa2Component } from './pages/empresa2/empresa2.component';


const routes: Routes = [
  {path: '', component: ContentComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'vagas', component: VagasComponent},
      {path: 'vagas/create', component: CreateVagaComponent},
      {path: 'nivel-usuario', component: NivelUsuarioComponent},
      {path: 'candidatos', component: CandidatosComponent}
    ]
  },
  {path: 'nivel-usuario', component: NivelUsuarioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'empresa', component: EmpresaComponent},
  {path: 'empresa2', component: Empresa2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
