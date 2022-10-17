import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonagensApiService {
  PUBLIC_KEY = '669acc64132a2ffd5cbc386c68cb5142';
  HASH = '';
  URL_API = 'https://gateway.marvel.com:443/v1/public/characters?orderBy=name&apikey=ed5accb8c7697714ac1dbf1c7584c3c0';

  constructor (private http: HttpClient) { }

getTodospersonagens(): Observable<any>{
  return this.http.get<any>(this.URL_API)
  .pipe(map((data: any) => data.data.results))
  }
}
