import { Component, OnInit } from '@angular/core';
import {Artiste} from "./Artiste";

@Component({
  selector: 'app-artiste-liste',
  templateUrl: './artiste-liste.component.html',
  styleUrls: ['./artiste-liste.component.scss']
})
export class ArtisteListeComponent implements OnInit {

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

  public select : string | undefined;

  public selectArtiste(s:string|undefined) : Artiste | undefined {
    return this.artistes.find(el => el.nom === s);
  }

  constructor() { }

  ngOnInit(): void {

  }

}
