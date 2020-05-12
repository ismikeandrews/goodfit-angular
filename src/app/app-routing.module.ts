import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NivelUsuarioComponent } from './pages/nivel-usuario/nivel-usuario.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CadastroComponent } from './pages/auth/cadastro/cadastro.component';
import { ContentComponent } from './layout/content/content.component';
import { DashboardComponent } from './pages/auth/dashboard/dashboard.component';
import { VagasComponent } from './pages/auth/dashboard/vagas/vagas.component';

const routes: Routes = [
  {path: '', component: ContentComponent, 
    children: [
      {path: 'dashboard', component: DashboardComponent },
      {path: 'vagas', component: VagasComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'nivel-usuario', component: NivelUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
