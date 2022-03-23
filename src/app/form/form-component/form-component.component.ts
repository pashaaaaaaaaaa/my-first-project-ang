import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ValidateCyrillic } from '../../../../src/ruslang/rus.validator';
import { MatChipInputEvent } from '@angular/material/chips';
import { mySkill } from './form-comp';
@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})

export class FormComponentComponent implements OnInit {
  // form: any;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  formProfile = new FormGroup({
    name : new FormControl('', ValidateCyrillic),
    lastname : new FormControl('', ValidateCyrillic),
    fatherName : new FormControl('', ValidateCyrillic),
    email : new FormControl('', ValidateCyrillic),
    skills: new FormArray([])
  })

  get skills() {
    return this.formProfile.get('skills') as FormArray;
  }
  
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  skillsCopy: mySkill[] = [{name: 'Доброта'}, {name: 'Честность'}, {name: 'Мечтатель))))'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // добавление умение 
    if (value) {
      this.skillsCopy.push({name: value});
      this.skills.push(this.fb.control(value));
    }

    // очистка инпута 
    event.chipInput!.clear();
  }

  remove(skill: mySkill): void {
    const index = this.skillsCopy.indexOf(skill);

    if (index >= 0) {
      this.skillsCopy.splice(index, 1);
      this.skills.removeAt(index);
    }
  }

  clearForm() {
    this.formProfile.reset();
    this.skills.clear()
    this.skillsCopy = [{name: 'Жизнерадостность'}, {name: 'Заинтересованность'}, {name: 'Интеллект'}];
    for (let i = 0; i < this.skillsCopy.length; i++) {
      this.skills.push(this.fb.control(this.skillsCopy[i].name));
    }
  }

  constructor(private fb: FormBuilder, private element: ElementRef) {
    for (let i = 0; i < this.skillsCopy.length; i++) {
      this.skills.push(this.fb.control(this.skillsCopy[i].name));
    }
    console.log(this.element)
    // console.log(document.getElementById('skills-input'))
  }


}
