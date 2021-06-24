import { Client } from './../../models/client.model';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { ChipsLengthChecker } from 'src/app/common/customValidators/chipslLengthChecker';
import { ClientService } from 'src/app/services/client.service';
import { NotificationService } from 'src/app/common/core-services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-update-client',
  templateUrl: './add-update-client.component.html',
  styleUrls: ['./add-update-client.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class AddUpdateClientComponent implements OnInit {
  clientForm!: FormGroup;
  private client!: Client;
  private id: string = '';
  editMode: boolean = false;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private _client: ClientService,
    private _notification: NotificationService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.clientForm = new FormGroup(
      {
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        birthDay: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        gender: new FormControl('male', Validators.required),
        hobbies: new FormControl([], ChipsLengthChecker()),
      },
      { updateOn: 'blur' }
    );

    this._route.params.subscribe((param: any) => {
      if (param.id) {
        this.getClientById(param.id);
        this.editMode = true;
      }
    });
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  getClientById(id: string) {
    this._client.getClientById(id).subscribe((res: any) => {
      let client: Client = res.body;
      this.id = client.id!;
      console.log(client);
      this.clientForm.patchValue(client);
    });
  }

  onSubmit(form: any) {
    console.log(form.value, this.clientForm.valid);
    this.client = { ...form.value };
    // console.log(this.client);
    if (this.clientForm.valid) {
      if (this.editMode && this.id) {
        this.client.id = this.id;
        this._client.updateClient(this.client).subscribe((res: any) => {
          this._notification.showSucess(res.message);
        });
        this._router.navigateByUrl('/clients');
        this.editMode = false;
      } else {
        this._client.addClient(this.client).subscribe((res: any) => {
          this._notification.showSucess(res.message);
        });
      }
      this.clientForm.reset();
    } else {
      this._notification.showError('Please fill valid Data');
    }
  }
}
