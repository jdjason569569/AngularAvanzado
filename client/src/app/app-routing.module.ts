import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './components/tienda/tienda.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from './components/keeper/keeper.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'animales', component: AnimalsComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'cuidadores', component: KeeperComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'login', component: LoginComponent},

  {path: 'admin-panel',  //PARA CARGAR RUTAS HIJAS en modo lazyload
  loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule), canActivate: [RoleGuard], data:{expectedRole: 'role_admin'}},

  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
