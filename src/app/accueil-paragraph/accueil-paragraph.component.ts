import { Component, OnInit } from '@angular/core';

/**
 * Composant page d'accueil
 */
@Component({
  selector: 'app-accueil-paragraph',
  templateUrl: './accueil-paragraph.component.html',
  styleUrls: ['./accueil-paragraph.component.scss']
})
export class AccueilParagraphComponent implements OnInit {

  // declaration des variables

  public condition: any;

  constructor() { }
  ngOnInit(): void {

  }

  // methode affichage : alterne condition true/false
  affichage = () : void => {
    this.condition = !this.condition;
  };


}
