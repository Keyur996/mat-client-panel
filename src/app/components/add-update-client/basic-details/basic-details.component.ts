import { BasicDetails } from './../../../models/basic-deatils.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css'],
})
export class BasicDetailsComponent implements OnInit {
  @Input() basicDetails!: BasicDetails;
  constructor() {}

  ngOnInit(): void {}
}
