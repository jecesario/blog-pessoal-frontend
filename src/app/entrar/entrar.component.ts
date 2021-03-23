import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from '../models/UsuarioLogin';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

}
