import { Client } from './../../models/client.model';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { ChipsLengthChecker } from 'src/app/common/customValidators/chipslLengthChecker';

@Component({
  selector: 'app-add-update-client',
  templateUrl: './add-update-client.component.html',
  styleUrls: ['./add-update-client.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class AddUpdateClientComponent implements OnInit {
  clientForm!: FormGroup;
  private client!: Client;

  constructor(
    private _fb: FormBuilder,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.clientForm = this._fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        birthDay: ['', Validators.required],
        city: ['', Validators.required],
        gender: ['male'],
        hobbies: [[]],
      },
      {
        validators: ChipsLengthChecker('hobbies'),
      }
    );
  }

  onSubmit(form: any) {
    console.log(form.value, form.valid);
    this.client = { ...form.value };
    // console.log(this.client);
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
}
