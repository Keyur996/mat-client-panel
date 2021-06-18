import { formValidations } from './../form-validations';
import { Component, Input, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup } from '@angular/forms';
import { handleError } from 'src/app/common/form-handle.class';

@Component({
  selector: 'app-other-details',
  templateUrl: './other-details.component.html',
  styleUrls: ['./other-details.component.css'],
})
export class OtherDetailsComponent implements OnInit {
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  @Input() otherDetails!: FormGroup;
  handleError: Function = handleError;
  formValidations: any = formValidations;
  myhobbies: string[] = [];
  visible: boolean = true;
  selectable: boolean = true;
  addOnBlur: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (!this.otherDetails.get('hobbies')?.value) {
      this.otherDetails.patchValue({
        hobbies: [],
      });
    }
    if (value) {
      this.otherDetails.get('hobbies')?.value.push(value);
      this.otherDetails.get('hobbies')?.updateValueAndValidity();
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  remove(hobby: string): void {
    const index = this.otherDetails.get('hobbies')?.value.indexOf(hobby);
    if (index >= 0) {
      this.otherDetails.get('hobbies')?.value.splice(index, 1);
      this.otherDetails.get('hobbies')?.updateValueAndValidity();
    }
  }
}
