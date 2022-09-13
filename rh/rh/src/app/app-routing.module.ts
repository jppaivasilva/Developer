import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadPessoaComponent } from './cad-pessoa/cad-pessoa.component';
import { TemporarioComponent } from './temporario/temporario.component';


const routes: Routes = [
{ path: '', component: LoginComponent},
{ path: 'temporario', component: TemporarioComponent},
];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
