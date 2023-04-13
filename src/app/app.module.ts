import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilParagraphComponent } from './accueil-paragraph/accueil-paragraph.component';
import { ArtisteListeComponent } from './artiste-liste/artiste-liste.component';
import { ArtisteFicheComponent } from './artiste-fiche/artiste-fiche.component';
import {FormsModule} from "@angular/forms";
import { BarNavComponent } from './bar-nav/bar-nav.component';
import { ArtisteFormComponent } from './artiste-form/artiste-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilParagraphComponent,
    ArtisteListeComponent,
    ArtisteFicheComponent,
    BarNavComponent,
    ArtisteFormComponent
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
