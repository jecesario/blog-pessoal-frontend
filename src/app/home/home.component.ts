import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Postagem } from '../models/Postagem';
import { Tema } from '../models/Tema';
import { Usuario } from '../models/Usuario';
import { AuthService } from '../services/auth.service';
import { PostagemService } from '../services/postagem.service';
import { TemaService } from '../services/tema.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postagem: Postagem = new Postagem()
  postagens: Postagem[]

  tema: Tema = new Tema()
  temas: Tema[]
  idTema: number

  usuario: Usuario = new Usuario()
  idUsuario = environment.id

  constructor(
    private router: Router, 
    private postagemService: PostagemService, 
    private temaService: TemaService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.getTemas()
    this.getPostagens()
  }

  getTemas() {
    this.temaService.findAll().subscribe((resp: Tema[]) => {
      this.temas = resp
    })
  }

  getTema() {
    this.temaService.findById(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  getPostagens() {
    this.postagemService.findAll().subscribe((resp: Postagem[]) => {
      this.postagens = resp
    })
  }

  getPostagensByUsuario() {
    this.authService.getUsuario(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  publicar() {
    this.tema.id = this.idTema;
    this.postagem.tema = this.tema;

    this.usuario.id = this.idUsuario
    this.postagem.usuario = this.usuario

    this.postagemService.create(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getPostagens()
    })
  }

}
