import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// @ts-ignore
import { AccueilParagraphComponent } from './accueil-paragraph/accueil-paragraph.component';
import { ArtisteListeComponent } from './artiste-liste/artiste-liste.component';
import { ArtisteFicheComponent } from './artiste-fiche/artiste-fiche.component';
import {FormsModule} from "@angular/forms";
import { BarNavComponent } from './bar-nav/bar-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilParagraphComponent,
    ArtisteListeComponent,
    ArtisteFicheComponent,
    BarNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
