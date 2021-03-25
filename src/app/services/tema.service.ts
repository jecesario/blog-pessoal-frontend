import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tema } from '../models/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  findAll(): Observable<Tema[]>{
    const url = this.baseUrl + '/temas'
    return this.http.get<Tema[]>(url, this.token)
  }

  create(tema: Tema): Observable<Tema> {
    const url = this.baseUrl + '/temas'
    return this.http.post<Tema>(url, tema, this.token)
  }
}
