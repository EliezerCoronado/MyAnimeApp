import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { CardComponent } from './page/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { NewcardComponent } from './page/newcard/newcard.component';
import { SingleCardComponent } from './page/single-card/single-card.component';
import '@angular/common/locales/global/es';
import { MovieComponent } from './pages/movie/movie.component';
import { SerieComponent } from './pages/serie/serie.component';
import { AnimeComponent } from './pages/anime/anime.component';
import { DoramaComponent } from './pages/dorama/dorama.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    NewcardComponent,
    SingleCardComponent,
    MovieComponent,
    SerieComponent,
    AnimeComponent,
    DoramaComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
