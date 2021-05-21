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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    NewcardComponent,
    SingleCardComponent
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
