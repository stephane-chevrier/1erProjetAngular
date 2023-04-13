import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Artiste} from "../artiste-liste/Artiste";

@Component({
  selector: 'app-artiste-fiche',
  templateUrl: './artiste-fiche.component.html',
  styleUrls: ['./artiste-fiche.component.scss']
})
export class ArtisteFicheComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Declaration de la recuperation de la variable artiste
  // ! permet d'éviter que le compilateur pense que la variable peut-être undefined'
  @Input() artiste! : Artiste;

  // Declaration de l'evenement qui permet d'envoyer l'Artiste du composant enfant (celui-ci) au parent
  @Output() artisteSup : EventEmitter<Artiste> = new EventEmitter<Artiste>();

  // Methode d'envoi de l'artiste au composant parent
  public suppressionArtiste() : void {
    this.artisteSup.emit(this.artiste);
  }
}
