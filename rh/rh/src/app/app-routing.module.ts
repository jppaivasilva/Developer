import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadPessoaComponent } from './cad-pessoa/cad-pessoa.component';



const routes: Routes = [
{ path: '', component: LoginComponent},
{ path: 'cadpessoa', component: CadPessoaComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
