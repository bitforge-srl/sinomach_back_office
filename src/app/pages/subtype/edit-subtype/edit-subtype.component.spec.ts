import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubTypeComponent } from './edit-subtype.component';

describe('EditComponent', () => {
  let component: EditSubTypeComponent;
  let fixture: ComponentFixture<EditSubTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSubTypeComponent]
    });
    fixture = TestBed.createComponent(EditSubTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
