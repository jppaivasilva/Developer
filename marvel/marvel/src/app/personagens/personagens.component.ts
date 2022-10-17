import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonagensApiService } from './personagem/shared/personagens-api.service';
@Component({
selector: 'app-personagens',
templateUrl: './personagens.component.html',
styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit {

  @Input()
personagem: any;


constructor(private personagemSvc: PersonagensApiService) { }
todosPersonagens: Observable<any>;
ngOnInit() {
this.getPersonagens();
}
getPersonagens() {
this.todosPersonagens = this.personagemSvc.getTodospersonagens();
}
}

