import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RankingPageComponent } from './components/ranking-page/ranking-page.component';
import { UserStartPageComponent } from './components/user-start-page/user-start-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RankingPageComponent,
    UserStartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
