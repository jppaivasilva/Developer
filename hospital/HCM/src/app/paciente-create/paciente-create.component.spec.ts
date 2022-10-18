import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-paciente-create',
  templateUrl: './paciente-create.component.html',
  styleUrls: ['./paciente-create.component.css']
})
export class PacienteCreateComponent implements OnInit {

  @Input() pacienteDetails = { name: '', email: '', phone: 0 };
  constructor(public restApi: RestApiService, public router: Router) {}
  ngOnInit() {}
  addEmployee(dataEmployee: any) {
    this.restApi.createEmployee(this.pacienteDetails).subscribe((data: {}) => {
      this.router.navigate(['/paciente-list']);
    });
  }
}
