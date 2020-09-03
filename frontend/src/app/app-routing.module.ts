import { RankingPageComponent } from './pages/ranking-page/ranking-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonPageComponent } from "./pages/pokemon-page/pokemon-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { UserStartPageComponent } from "./pages/user-start-page/user-start-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'ranking', component: RankingPageComponent },
  { path:"pokemon", component: PokemonPageComponent},
  { path: 'userstartpage', component: UserStartPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
