import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RankingPageComponent } from './pages/ranking-page/ranking-page.component';
import { UserStartPageComponent } from './pages/user-start-page/user-start-page.component';

import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { RankingListComponent } from './components/ranking-list/ranking-list.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';

import { HomePageComponent } from './pages/home-page/home-page.component';

import { MapBoxComponent } from './components/map-box/map-box.component';



@NgModule({
  declarations: [
    AppComponent,
    RankingPageComponent,
    UserStartPageComponent,
    PokemonListComponent,
    PokemonPageComponent,
    RankingListComponent,
    NavBarComponent,
    HomePageComponent,
    MapBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
