import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/models/Tema';
import { TemaService } from 'src/app/services/tema.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css']
})
export class TemaDeleteComponent implements OnInit {

  tema: Tema = new Tema()
  id: number

  constructor(private temaService: TemaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.id = this.route.snapshot.params['id']
    this.findById(this.id)
  }

  findById(id: number) {
    this.temaService.findById(this.id).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  deletar() {
    this.temaService.delete(this.id).subscribe(() => {
      alert('Tema apagado com sucesso!')
      this.router.navigate(['/tema'])
    })
  }

}
