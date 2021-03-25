import { NgModule } from "@angular/core";
import { CadastrarComponent } from "./cadastrar/cadastrar.component";
import { EntrarComponent } from "./entrar/entrar.component";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TemaComponent } from "./tema/tema.component";


const routes: Routes = [

    {path: '', redirectTo: 'entrar', pathMatch: 'full'},

    {path: 'entrar', component: EntrarComponent},
    {path: 'cadastrar', component: CadastrarComponent},
    {path: 'home', component: HomeComponent},
    {path: 'tema', component: TemaComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}