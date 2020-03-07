import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NivelUsuarioComponent } from './pages/nivel-usuario/nivel-usuario.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CadastroComponent } from './pages/auth/cadastro/cadastro.component';
import { EscolhaComponent } from './pages/auth/cadastro/escolha/escolha.component';
import { CandidatoComponent } from './pages/auth/cadastro/candidato/candidato.component';
import { StepsComponent } from './shared/components/steps/steps.component';
import { EmpresaComponent } from './pages/auth/cadastro/empresa/empresa.component';
import { Etapa1Component } from './pages/auth/cadastro/candidato/etapa1/etapa1.component';
import { Etapa2Component } from './pages/auth/cadastro/candidato/etapa2/etapa2.component';
import { Etapa3Component } from './pages/auth/cadastro/candidato/etapa3/etapa3.component';



@NgModule({
  declarations: [
    AppComponent,
    NivelUsuarioComponent,
    LoginComponent,
    CadastroComponent,
    EscolhaComponent,
    CandidatoComponent,
    StepsComponent,
    EmpresaComponent,
    Etapa1Component,
    Etapa2Component,
    Etapa3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
