import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadpacienteComponent } from './cadpaciente/cadpaciente.component';
import { ListapacienteComponent } from './listapaciente/listapaciente.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PacienteCreateComponent } from './paciente-create/paciente-create.component';
import { PacienteEditComponent } from './paciente-edit/paciente-edit.component';
import { PacienteListComponent } from './paciente-list/paciente-list.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'lista', component: ListapacienteComponent},
  {path: 'cadastro', component: CadpacienteComponent},
  {path: 'lista', component: ListapacienteComponent},
  {path: 'paciente-list', component: PacienteListComponent},
  {path: 'paciente-edit/:id', component: PacienteEditComponent},
  {path: 'paciente-create', component: PacienteCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
