import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/models/Postagem';
import { Tema } from 'src/app/models/Tema';
import { PostagemService } from 'src/app/services/postagem.service';
import { TemaService } from 'src/app/services/tema.service';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  postagem: Postagem = new Postagem()

  tema: Tema = new Tema()
  temas: Tema[]
  idTema:number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private temaSerevice: TemaService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    let id = this.route.snapshot.params['id']
    this.findById(id)
    this.getTemas()
  }

  findById(id: number) {
    this.postagemService.findById(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }

  getTema() {
    this.temaSerevice.findById(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  getTemas() {
    this.temaSerevice.findAll().subscribe((resp: Tema[]) => {
      this.temas = resp
    })
  }

  atualizar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.postagemService.update(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem atualizada com sucesso!')
      this.router.navigate(['/home'])
    })
  }

}
