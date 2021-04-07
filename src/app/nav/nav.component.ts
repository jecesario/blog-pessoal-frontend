import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  id = environment.id
  
  constructor(private router: Router) { }

  ngOnInit() {
    if(this.foto == null || this.foto == '') {
      this.foto = '../../assets/images/default-avatar.jpg'
    }
    if(this.nome == '') {
      this.nome = 'Visitante'
    }    
  }

  sair() {
    this.router.navigate(['/entrar'])
    environment.nome = ''
    environment.foto = ''
    environment.token = ''
    environment.id = 0
  }

}
