
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { AdminComponent } from '../components/admin/admin.component';
import { ListComponent } from '../components/list/list.component';
import { GuardService } from '../services/guard.service';
import { NuevaFotografiaComponent } from '../components/nueva-fotografia/nueva-fotografia.component';
import { EditarFotografiaComponent } from '../components/editar-fotografia/editar-fotografia.component';
import { InicioComponent } from '../components/inicio/inicio.component';
import { IndexComponent } from '../components/index/index.component';
import { SolucionesComponent } from '../components/soluciones/soluciones.component';
import { PreguntasComponent } from '../components/preguntas/preguntas.component';

const app_routes:Routes=[
    {path:'index', component:IndexComponent,
    children:[
        {path: 'inicio', component:InicioComponent},
        {path: 'home/:num', component:HomeComponent},
        {path: 'soluciones', component:SolucionesComponent},
        {path: 'preguntas', component:PreguntasComponent}
    ]},
    {path:'admin', component:AdminComponent, canActivate:[GuardService], 
    children:[
        {path: 'list', component:ListComponent},
        {path: 'new', component:NuevaFotografiaComponent},
        {path: 'edit/:id', component:EditarFotografiaComponent}
    ]},

    {path:'login', component:LoginComponent},
    {path:'**',pathMatch:'full',redirectTo:'index/inicio'}  //Todas las rutas que escribamos deben de coincidir en su totalidad
    
]

export const AppRouting = RouterModule.forRoot(app_routes);