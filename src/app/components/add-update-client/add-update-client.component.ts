import { Client } from './../../models/client.model';
import { OtherDeatils } from './../../models/other-deatils.model';
import { BasicDetails } from './../../models/basic-deatils.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-update-client',
  templateUrl: './add-update-client.component.html',
  styleUrls: ['./add-update-client.component.css'],
})
export class AddUpdateClientComponent implements OnInit {
  basic: BasicDetails = new BasicDetails('', '', '', new Date());
  other: OtherDeatils = new OtherDeatils('', 'male', []);
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    // console.log(form.value, form.valid);
    console.log(this.basic, this.other);
    // const client: Client = new Client(this.basic, this.other);
    // console.log(client);
  }
}
