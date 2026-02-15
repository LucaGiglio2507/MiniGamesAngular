import {Component, EventEmitter, Output} from '@angular/core';
import {ReactiveFormsModule, Validators} from '@angular/forms';
import {FormBuilder, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-bataille-parametre',
  imports: [ReactiveFormsModule],
  templateUrl: './bataille-parametre.html',
  styleUrl: './bataille-parametre.css',
})
export class BatailleParametre {
  @Output() paramSaved = new EventEmitter<any>();                                   // communication vers le parent

  battleParamForm: FormGroup;                                                       // création du formulaire

  constructor(private formBuilder: FormBuilder) {                                   // constructeur du composant dans lequel je créer mon formulaire
    this.battleParamForm = this.formBuilder.group({                                 // création d'un groupe de données
      iaParam: [false],                                                             // parametre Ia
      iaDifficulty: [''],                                                           // difficulté Ia
      boardSize: [6, [Validators.required, Validators.min(6), Validators.max(10)]], // taille de la map avec validateur
      boatCount: [4, [Validators.required, Validators.min(4), Validators.max(8)]],  // nombre de bateaux
      boats: this.formBuilder.array([]),                                            // création d'un tableau de données,en formulaire
    });
  }

  get boats(): FormArray {                                                          // getter de boats permet d'avoir accès aux données de boats
    return this.battleParamForm.get('boats') as FormArray;                          // getter + cast en FormArray
  }

  creationTableauTaille() {                                                         // création du tableau permettant de sélectionner la taille des bateaux
    const boatCount = this.battleParamForm.get('boatCount')?.value || 0;            // récupération du nombre de bateaux + stock dans boatCount   
    this.boats.clear();                                                             // vider la liste actuelle en cas de changements
    for (let i = 0; i < boatCount; i++) {
      const boat = this.formBuilder.group({                                         // création du groupe de données correspondant a chaque bateau
        id: [i],                                                                    // id = index actuel
        vie: [2, [Validators.required, Validators.min(2), Validators.max(4)]]       // stat de vie de chaque bateau correspondant a leur taille,avec les restrictions 
      });
      this.boats.push(boat);                                                        // push le bateau dans la liste
    }
  }

  saveParameters() {                                                                // fonction associée au bouton submit
    if (this.battleParamForm.valid) {                                               // si toutes les données du formulaires sont validées
      const params = this.battleParamForm.value;                                    // params = les données de mon formulaire
      this.paramSaved.emit(params);                                                 // renvoie params dans paramSaved qui correspond a l'output(regarde au dessus)
    }
  }
}

export class Bateau {                                                               // bateau
  id!: number
  vie!: number

  constructor(id: number, vie: number) {                                            // constructeur bateau
    this.id = id
    this.vie = vie
  }

}