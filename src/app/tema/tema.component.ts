import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Tema } from '../models/Tema';
import { TemaService } from '../services/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  temas: Tema[]

  constructor(private router: Router, private temaService: TemaService) { }

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/entrar'])
    }
    this.listar()
  }

  listar() {
    this.temaService.findAll().subscribe((resp: Tema[]) => {
      this.temas = resp
    })
  }

  cadastrar() {
    this.temaService.create(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      alert('Tema cadastrado com sucesso!')
      this.listar()
      this.tema = new Tema
    })
  }

}
