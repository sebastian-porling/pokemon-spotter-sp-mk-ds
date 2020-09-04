import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { RankingPageComponent } from './pages/ranking-page/ranking-page.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserStartPageComponent } from './pages/user-start-page/user-start-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AddSpottedPokemonPageComponent } from './pages/add-spotted-pokemon-page/add-spotted-pokemon-page.component';

const redirectLoggedInToUserpage = () => redirectLoggedInTo(['userstartpage']);
const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['']);

const routes: Routes = [

  { path: '', component: HomePageComponent},
  { path: 'ranking', component: RankingPageComponent, canActivate:
  [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToHome} },
  { path: 'pokemon', component: PokemonPageComponent, canActivate:
  [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToHome}},
  { path: 'addspottedpokemon', component: AddSpottedPokemonPageComponent, canActivate:
  [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToHome}},
  { path: 'userstartpage', component: UserStartPageComponent, canActivate:
  [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToHome} },
  { path: 'register', component: RegisterPageComponent, canActivate: [AngularFireAuthGuard],
  data: {authGuardPipe: redirectLoggedInToUserpage} }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
