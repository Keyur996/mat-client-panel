import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateClientComponent } from './add-update-client.component';

describe('AddUpdateClientComponent', () => {
  let component: AddUpdateClientComponent;
  let fixture: ComponentFixture<AddUpdateClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
