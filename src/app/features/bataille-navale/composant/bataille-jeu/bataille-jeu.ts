import { Component, input } from '@angular/core';

@Component({
  selector: 'app-bataille-jeu',
  imports: [],
  templateUrl: './bataille-jeu.html',
  styleUrl: './bataille-jeu.css',
})
export class BatailleJeu {

bateaux = input.required<number>()
tailleMap = input.required<number>()
tailleBateaux = input.required<number[]>()

}
