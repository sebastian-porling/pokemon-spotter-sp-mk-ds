import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RankingPageComponent } from './pages/ranking-page/ranking-page.component';
import { UserStartPageComponent } from './components/user-start-page/user-start-page.component';

import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { AllRankingListComponent } from './components/all-ranking-list/all-ranking-list.component';
import { TopTenListComponent } from './components/top-ten-list/top-ten-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RankingPageComponent,
    UserStartPageComponent,
    PokemonListComponent,
    PokemonPageComponent,
    AllRankingListComponent,
    TopTenListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
