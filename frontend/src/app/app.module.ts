import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RankingPageComponent } from './pages/ranking-page/ranking-page.component';
import { UserStartPageComponent } from './pages/user-start-page/user-start-page.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { RankingListComponent } from './components/ranking-list/ranking-list.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MapBoxComponent } from './components/map-box/map-box.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AddSpottedPokemonPageComponent } from './pages/add-spotted-pokemon-page/add-spotted-pokemon-page.component';



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
    MapBoxComponent,
    RegisterPageComponent,
    AddSpottedPokemonPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
