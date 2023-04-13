import { Component, OnInit } from '@angular/core';
import {Artiste} from "./Artiste";

@Component({
  selector: 'app-artiste-liste',
  templateUrl: './artiste-liste.component.html',
  styleUrls: ['./artiste-liste.component.scss']
})
export class ArtisteListeComponent implements OnInit {

  // initialisation liste artistes
  artistes : Artiste[]  = [
    {
      nom : "Gauguin",
      urlImage : "assets/gauguin.jpg"
    },{
      nom : "Monet",
      urlImage : "assets/monet.jpg"
    }, {
      nom :"Van Gogh",
      urlImage :"assets/vangogh.jpg"
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  // Methode de suppression de la liste d'artistes le l'artiste en argument
  artisteSup(artiste:Artiste) : void {
    this.artistes = this.artistes.filter((artiste1 : Artiste): boolean => artiste1.nom != artiste.nom);
  }
}
