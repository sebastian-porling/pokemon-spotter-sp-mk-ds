import { RankingPageComponent } from './pages/ranking-page/ranking-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonPageComponent } from "./pages/pokemon-page/pokemon-page.component";


const routes: Routes = [
  { path: 'ranking', component: RankingPageComponent },
  {path:"pokemon", component: PokemonPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
