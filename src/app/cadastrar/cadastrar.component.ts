import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmacaoSenha: string
  tipoUsuario: string


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  verificaSenha(event: any) {
    this.confirmacaoSenha = event.target.value
  }

  verificaUsuario(event: any) {
    this.tipoUsuario = event.target.value
  }

  cadastrar() {
    this.usuario.tipo = this.tipoUsuario

    console.log(this.usuario.nome)
    console.log(this.usuario.usuario)
    console.log(this.usuario.foto)
    console.log(this.usuario.senha)

    if(this.usuario.senha != this.confirmacaoSenha) {
      alert('As senhas estão incorretas')
    } else {
      this.auth.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso!')
      })
    }
  }

}
