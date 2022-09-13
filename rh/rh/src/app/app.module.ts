import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadPessoaComponent } from './cad-pessoa/cad-pessoa.component';
import { TemporarioComponent } from './temporario/temporario.component';
@NgModule({
  declarations: [
    AppComponent,
    CadPessoaComponent,
    TemporarioComponent,
],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
