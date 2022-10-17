import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonagensApiService {
  PUBLIC_KEY = '669acc64132a2ffd5cbc386c68cb5142';
  HASH = '';
  URL_API =
    'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150';

  constructor(private http: HttpClient) {}

  getTodospersonagens(): Observable<any> {
    return this.http
      .get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results));
  }
}
