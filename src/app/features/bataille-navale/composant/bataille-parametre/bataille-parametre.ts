import { Component, inject, input, output, Output, signal, WritableSignal } from '@angular/core';
import { FormsModule,FormBuilder,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bataille-parametre',
  imports: [FormsModule],
  templateUrl: './bataille-parametre.html',
  styleUrl: './bataille-parametre.css',
})
export class BatailleParametre {
iaParam : boolean = false
bateauxParam : number = 0 
tailleMapParam : number = 0
tableauBateauxParam : Bateau[]= []

creationTableauTaille(){
  let tableau : Bateau[]= new Array<Bateau>(this.bateauxParam)  
  this.tableauBateauxParam = tableau
  for(let i = 0 ;i < this.bateauxParam; i++){
    this.tableauBateauxParam[i] = new Bateau(i,0)
  }
}



}












export class Bateau{
  id!: number
  vie!: number

  constructor(id : number,vie : number) {
    this.id = id
    this.vie = vie  
  }

}