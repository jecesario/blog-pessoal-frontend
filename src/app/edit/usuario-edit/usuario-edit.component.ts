import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUsuario: number
  confirmacaoSenha: string
  tipoUsuario: string

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUsuario(this.idUsuario)
  }

  verificaSenha(event: any) {
    this.confirmacaoSenha = event.target.value
  }

  verificaUsuario(event: any) {
    this.tipoUsuario = event.target.value
  }

  atualizar() {
    this.usuario.tipo = this.tipoUsuario

    console.log(this.usuario.nome)
    console.log(this.usuario.usuario)
    console.log(this.usuario.foto)
    console.log(this.usuario.senha)

    if(this.usuario.senha != this.confirmacaoSenha) {
      alert('As senhas estão incorretas')
    } else {
      this.auth.atualizar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        alert('Usuário atualizado com sucesso! Faça login novamente.')
        environment.nome = ''
        environment.foto = ''
        environment.token = ''
        environment.id = 0
        this.router.navigate(['/entrar'])
      })
    }
  }

  findByIdUsuario(id: number) {
    this.auth.getUsuario(this.idUsuario).subscribe((resp) => {
      this.usuario = resp
    })
  }

}
