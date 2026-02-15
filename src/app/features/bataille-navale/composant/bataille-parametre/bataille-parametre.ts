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
  @Output() paramSaved = new EventEmitter<any>();

  battleParamForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.battleParamForm = this.formBuilder.group({
      iaParam: [false],
      iaDifficulty: ['easy'],
      boardSize: [6, [Validators.required, Validators.min(6), Validators.max(10)]],
      boatCount: [0, [Validators.required, Validators.min(4), Validators.max(8)]],
      boats: this.formBuilder.array([]),
    });
  }

  get boats(): FormArray {
    return this.battleParamForm.get('boats') as FormArray;
  }

  creationTableauTaille() {
    const boatCount = this.battleParamForm.get('boatCount')?.value || 0;
    this.boats.clear();
    for (let i = 0; i < boatCount; i++) {
      const boat = this.formBuilder.group({
        id: [i],
        vie: [0, [Validators.required, Validators.min(1), Validators.max(4)]]
      });
      this.boats.push(boat);
    }
  }

  saveParameters() {
    if (this.battleParamForm.valid) {
      const params = this.battleParamForm.value;
      this.paramSaved.emit(params);
    }
  }
}

export class Bateau {
  id!: number
  vie!: number

  constructor(id: number, vie: number) {
    this.id = id
    this.vie = vie
  }

}