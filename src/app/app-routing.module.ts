import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NivelUsuarioComponent } from './pages/nivel-usuario/nivel-usuario.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CadastroComponent } from './pages/auth/cadastro/cadastro.component';
import { DashboardComponent } from './pages/auth/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'nivel-usuario', component: NivelUsuarioComponent},
  {path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
