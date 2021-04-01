import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/Usuario';
import { UsuarioLogin } from '../models/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    const url = this.baseUrl + '/usuarios/logar'
    return this.http.post<UsuarioLogin>(url, usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    const url = this.baseUrl + '/usuarios/cadastrar';
    return this.http.post<Usuario>(url, usuario)
  }

  getUsuario(id: number): Observable<Usuario> {
    const url = this.baseUrl + `/usuarios/${id}`
    return this.http.get<Usuario>(url, {headers: {'Authorization': environment.token}})
  }

  logado() {
    let ok = false

    if (environment.token != '') {
      ok = true
    }

    return ok
  }
}
