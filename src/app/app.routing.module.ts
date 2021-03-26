import { NgModule } from "@angular/core";
import { CadastrarComponent } from "./cadastrar/cadastrar.component";
import { EntrarComponent } from "./entrar/entrar.component";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TemaComponent } from "./tema/tema.component";
import { TemaEditComponent } from "./edit/tema-edit/tema-edit.component";
import { TemaDeleteComponent } from "./delete/tema-delete/tema-delete.component";


const routes: Routes = [

    {path: '', redirectTo: 'entrar', pathMatch: 'full'},

    {path: 'entrar', component: EntrarComponent},
    {path: 'cadastrar', component: CadastrarComponent},
    {path: 'home', component: HomeComponent},
    {path: 'tema', component: TemaComponent},
    {path: 'tema/editar/:id', component: TemaEditComponent},
    {path: 'tema/deletar/:id', component: TemaDeleteComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}