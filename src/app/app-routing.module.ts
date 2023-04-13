import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilParagraphComponent} from "./accueil-paragraph/accueil-paragraph.component";
import { ArtisteListeComponent} from "./artiste-liste/artiste-liste.component";

const routes: Routes = [
  { path: 'Accueil', component: AccueilParagraphComponent},
  { path: 'Artistes', component: ArtisteListeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
