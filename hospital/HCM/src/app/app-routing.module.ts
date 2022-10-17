import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadpacienteComponent } from './cadpaciente/cadpaciente.component';
import { ListapacienteComponent } from './listapaciente/listapaciente.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'lista', component: ListapacienteComponent},
  {path: 'cadastro', component: CadpacienteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
