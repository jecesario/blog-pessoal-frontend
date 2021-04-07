import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/models/Postagem';
import { PostagemService } from 'src/app/services/postagem.service';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {

  postagem: Postagem  = new Postagem()
  idPost: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.idPost = this.route.snapshot.params['id']
    this.findById(this.idPost)
  }

  findById(id: number) {
    this.postagemService.findById(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }

  apagar() {
    this.postagemService.delete(this.idPost).subscribe(() => {
      alert('Postagem apagada com sucesso!')
      this.router.navigate(['/home'])
    })
  }

}
