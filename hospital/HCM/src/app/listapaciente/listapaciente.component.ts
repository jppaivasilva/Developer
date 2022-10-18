/**
 * imports pra funcionar corretamente a lista <table>.
 */
 import {AfterViewInit, Component, ViewChild} from '@angular/core';
 import {MatTableDataSource} from '@angular/material/table';

 /**
  * Imports pra funcionar Paginação
  */
 import {MatPaginator} from '@angular/material/paginator';

 /**
  * Imports pra funcionar classificação (Sort)
  */
 import {LiveAnnouncer} from '@angular/cdk/a11y';
 import {MatSort, Sort} from '@angular/material/sort';


 /**
  * @title Binding event handlers and properties to the table rows.
  */
  @Component({
   selector: 'app-listapaciente',
   templateUrl: './listapaciente.component.html',
   styleUrls: ['./listapaciente.component.css']
 })

 /**
  * Exportar Classe para exibir id, nome, peso e cidade
  */
 export class ListapacienteComponent implements AfterViewInit {
   displayedColumns: string[] = ['id', 'nome', 'peso', 'cidade'];
   dataSource = new MatTableDataSource<DadosPacientes>(ELEMENT_DATA);

   /**
  * Constructor para classificar (Sort)
  */
   constructor(private _liveAnnouncer: LiveAnnouncer) {}

   /**
  * Definindo view para herdar recursos Classificacao
  */
   @ViewChild(MatSort) sort: MatSort;

   /**
  * Definindo view para herdar recursos Paginação
  */
    @ViewChild(MatPaginator) paginator: MatPaginator;

   ngAfterViewInit() {
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
   }

 /**
  * esta "variável" receberá os dados do Paciente
  */
   clickedRows = new Set<DadosPacientes>();

   /** sort state for assistive technology. */
   announceSortChange(sortState: Sort) {

     if (sortState.direction) {
       this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
     } else {
       this._liveAnnouncer.announce('Sorting cleared');
     }
   }
 }

 /**
  * Além de exportar uma classe, agora vamos exportar uma interface
  * AS interfaces permitem definir um CONTRATO
  */
 export interface DadosPacientes {
   nome: string;
   id: number;
   peso: number;
   cidade: string;
 }

 /**
  * Estamos criando um array para receber esses dados que digitei.
  * Futuramente esse array pode receber dados de uma API, originados de uma base de dados
  */
 const ELEMENT_DATA: DadosPacientes[] = [
   {id: 1, nome: 'Ed Sheran', peso: 92.1, cidade: 'São Vicente'},
   {id: 2, nome: 'Maria José', peso: 55.2, cidade: 'Santos'},
   {id: 3, nome: 'Eminem', peso: 34.2, cidade: 'Praia Grande'},
   {id: 4, nome: 'Lady Gaga', peso: 113.43, cidade: 'SAntos'},
   {id: 5, nome: 'Zé Paciente', peso: 102.811, cidade: 'São Vicente'},
   {id: 6, nome: 'Bruno Mars', peso: 78.07, cidade: 'Cubatão'},
   {id: 7, nome: 'Zé Maria', peso: 64.67, cidade: 'Guarujá'},
   {id: 8, nome: 'Michael Jackson', peso: 75.94, cidade: 'São Vicente'},
   {id: 9, nome: 'Justin Bieber', peso: 78.9984, cidade: 'Praia Grande'},
   {id: 10, nome: 'Rihana', peso: 50.1797, cidade: 'Monguaguá'},
   {id: 11, nome: 'Taylor Swift', peso: 92.1, cidade: 'São Vicente'},
   {id: 12, nome: 'Bob Marley', peso: 55.2, cidade: 'Santos'},
   {id: 13, nome: 'Drake', peso: 34.2, cidade: 'Praia Grande'},
   {id: 14, nome: 'Elvis Presley', peso: 113.43, cidade: 'SAntos'},
   {id: 15, nome: 'Katy Perry', peso: 102.811, cidade: 'São Vicente'},
   {id: 16, nome: 'Mariah Carey', peso: 78.07, cidade: 'Cubatão'},
   {id: 17, nome: 'John Lennon', peso: 64.67, cidade: 'Guarujá'},
   {id: 18, nome: 'Avril Lavigne', peso: 75.94, cidade: 'São Vicente'},
   {id: 19, nome: 'Bezerra da Silva', peso: 78.9984, cidade: 'Praia Grande'},
   {id: 20, nome: 'Freddie Mercury', peso: 50.1797, cidade: 'Monguaguá'},
   {id: 21, nome: 'Whitney Houston', peso: 92.1, cidade: 'São Vicente'},
   {id: 22, nome: 'Arlindo Crus', peso: 55.2, cidade: 'Santos'},
   {id: 23, nome: 'Zeca Padoginho', peso: 34.2, cidade: 'Praia Grande'},
   {id: 24, nome: 'Diogo Nogueira', peso: 113.43, cidade: 'SAntos'},
   {id: 25, nome: 'Céline Dion', peso: 102.811, cidade: 'São Vicente'},
   {id: 26, nome: 'David Guetta', peso: 78.07, cidade: 'Cubatão'},
   {id: 27, nome: 'Mile Cyrus', peso: 64.67, cidade: 'Guarujá'},
   {id: 28, nome: 'Camila Cabelo', peso: 75.94, cidade: 'São Vicente'},
   {id: 29, nome: 'Bryan Adams', peso: 78.9984, cidade: 'Praia Grande'},
   {id: 30, nome: 'James Brown', peso: 50.1797, cidade: 'Monguaguá'},
 ];
