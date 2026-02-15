import { Component, input, InputSignal, Signal, WritableSignal } from '@angular/core';

import { BatailleParametre } from "./composant/bataille-parametre/bataille-parametre"; 
@Component({
  selector: 'app-bataille-navale',
  imports: [BatailleParametre],
  templateUrl: './bataille-navale.html',
  styleUrl: './bataille-navale.css',
})

export class BatailleNavale {
  isReady: boolean = false;

  onParamSaved(params: any) {
    console.log('Paramètres sauvegardés :', params);
    this.isReady = true;
  }
}

