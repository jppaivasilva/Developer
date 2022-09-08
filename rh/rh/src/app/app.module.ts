import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadPessoaComponent } from './cad-pessoa/cad-pessoa.component';
@NgModule({
  declarations: [
    AppComponent,
    CadPessoaComponent,
],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
