import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NivelUsuarioComponent } from './pages/nivel-usuario/nivel-usuario.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CadastroComponent } from './pages/auth/cadastro/cadastro.component';
import { CandidatoComponent } from './pages/auth/cadastro/candidato/candidato.component';
import { StepsComponent } from './shared/components/steps/steps.component';
import { EmpresaComponent } from './pages/auth/cadastro/empresa/empresa.component';
import { Etapa1Component } from './pages/auth/cadastro/candidato/etapa1/etapa1.component';
import { Etapa2Component } from './pages/auth/cadastro/candidato/etapa2/etapa2.component';
import { Etapa3Component } from './pages/auth/cadastro/candidato/etapa3/etapa3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatSelectModule} from '@angular/material';
import { DashboardComponent } from './pages/auth/dashboard/dashboard.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent,
    NivelUsuarioComponent,
    LoginComponent,
    CadastroComponent,
    CandidatoComponent,
    StepsComponent,
    EmpresaComponent,
    Etapa1Component,
    Etapa2Component,
    Etapa3Component,
    DashboardComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
