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

  public selectArtiste(s:string) : Artiste {
    // variable locale pour eviter la possibilite de return undefined
    let artisteTempo : Artiste | undefined = this.artistes.find(el => el.nom === s);
    if (artisteTempo != undefined) {
      return artisteTempo
    } else {
      return this.artistes[0]
    }
  }

  constructor() { }

  ngOnInit(): void {

  }

}
