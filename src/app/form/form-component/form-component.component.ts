import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { COMMA, ENTER, I } from '@angular/cdk/keycodes';
import { ValidateCyrillic } from '../../../../src/ruslang/rus.validator';
import { MatChipInputEvent } from '@angular/material/chips';
import { mySkill } from './form-comp';
@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})

export class FormComponentComponent implements OnInit {

  skillsCopy: mySkill[] = [{name: 'Доброта'}, {name: 'Честность'}, {name: 'Мечтатель))))'}];
  
  readonly powers: string[] = this.skillsCopy.map(el => el.name);

  constructor(private fb: FormBuilder, private element: ElementRef) {
    console.log(this.element)
    console.log(this.skillsCopy, "this")
    // console.log(document.getElementById('skills-input'))
  }

  ngOnInit(): void {
  }
  
  formProfile = new FormGroup({
    name : new FormControl('', ValidateCyrillic),
    lastname : new FormControl('', ValidateCyrillic),
    fatherName : new FormControl('', ValidateCyrillic),
    email : new FormControl('', []),
    skills: new FormArray(this.powers.map(el => new FormControl(el)))
  })

  

  get skills() {
    return this.formProfile.get('skills') as FormArray;
  }
  
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  

  add(event: MatChipInputEvent): void {
    const value = event.value.trim() || '';

    // добавление умение 
    if (value) {
      this.skills.push(this.fb.control(value));
    }

    // очистка инпута 
    event.chipInput!.clear();
  }

  remove(ind: number): void {
    //Любой вариант подойдет
      //this.skills.controls.splice(ind, 1);
      this.skills.removeAt(ind);
  }

  clearForm() {
    this.formProfile.reset();
    this.skills.patchValue(this.powers);
    this.skills.controls.splice(3);
    //любой вариант подойдет
    //this.skills.clear();
    /*for (let i = 0; i < this.powers.length; i++) {
      this.skills.push(this.fb.control(this.powers[i]));
    }*/
  }

}