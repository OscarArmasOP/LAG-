import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRouting } from './routes/routing';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ListComponent } from './components/list/list.component';
import { GuardComponent } from './components/guard/guard.component';
import { NuevaFotografiaComponent } from './components/nueva-fotografia/nueva-fotografia.component';
import { EditarFotografiaComponent } from './components/editar-fotografia/editar-fotografia.component';
import { IndexComponent } from './components/index/index.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { SolucionesComponent } from './components/soluciones/soluciones.component';

  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    ListComponent,
    GuardComponent,
    NuevaFotografiaComponent,
    EditarFotografiaComponent,
    IndexComponent,
    InicioComponent,
    PreguntasComponent,
    SolucionesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    AppRouting
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
