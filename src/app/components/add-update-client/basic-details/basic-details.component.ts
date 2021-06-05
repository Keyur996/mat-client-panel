import { formValidations } from './../form-validations';
import { handleError } from './../../../common/form-handle.class';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css'],
})
export class BasicDetailsComponent implements OnInit {
  @Input() basicDetails!: FormGroup;
  handleError: Function = handleError;
  formValidations: any = formValidations;

  constructor() {}

  ngOnInit(): void {}
}
