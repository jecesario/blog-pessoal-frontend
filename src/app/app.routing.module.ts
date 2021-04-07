import { NgModule } from "@angular/core";
import { CadastrarComponent } from "./cadastrar/cadastrar.component";
import { EntrarComponent } from "./entrar/entrar.component";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TemaComponent } from "./tema/tema.component";
import { TemaEditComponent } from "./edit/tema-edit/tema-edit.component";
import { TemaDeleteComponent } from "./delete/tema-delete/tema-delete.component";
import { PostagemEditComponent } from "./edit/postagem-edit/postagem-edit.component";
import { PostagemDeleteComponent } from "./delete/postagem-delete/postagem-delete.component";
import { UsuarioEditComponent } from "./edit/usuario-edit/usuario-edit.component";


const routes: Routes = [

    {path: '', redirectTo: 'entrar', pathMatch: 'full'},

    {path: 'entrar', component: EntrarComponent},
    {path: 'cadastrar', component: CadastrarComponent},
    {path: 'home', component: HomeComponent},
    {path: 'tema', component: TemaComponent},
    {path: 'tema/editar/:id', component: TemaEditComponent},
    {path: 'tema/deletar/:id', component: TemaDeleteComponent},
    {path: 'postagem/editar/:id', component: PostagemEditComponent},
    {path: 'postagem/deletar/:id', component: PostagemDeleteComponent},
    {path: 'perfil/editar/:id', component: UsuarioEditComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}