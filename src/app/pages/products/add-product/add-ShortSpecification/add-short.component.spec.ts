import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShortComponent } from './add-short.component';

describe('AddShortComponent', () => {
  let component: AddShortComponent;
  let fixture: ComponentFixture<AddShortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddShortComponent]
    });
    fixture = TestBed.createComponent(AddShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
