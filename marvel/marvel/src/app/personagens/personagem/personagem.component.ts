import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {

  @Input()
  personagem: any;

  constructor() { }

  ngOnInit(): void {
  }

}
