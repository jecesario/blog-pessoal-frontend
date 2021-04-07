import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Postagem } from '../models/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  findAll(): Observable<Postagem[]> {
    const url = this.baseUrl + '/postagens'
    return this.http.get<Postagem[]>(url, this.token)
  }

  findById(id: number): Observable<Postagem> {
    const url = this.baseUrl + `/postagens/${id}`
    return this.http.get<Postagem>(url, this.token)
  }

  create(postagem: Postagem): Observable<Postagem> {
    const url = this.baseUrl + '/postagens'
    return this.http.post<Postagem>(url, postagem, this.token)
  }

  update(postagem: Postagem): Observable<Postagem> {
    const url = this.baseUrl + '/postagens'
    return this.http.put<Postagem>(url, postagem, this.token)
  }

  delete(id: number) {
    const url = this.baseUrl + `/postagens/${id}`
    return this.http.delete(url, this.token)
  }
}
