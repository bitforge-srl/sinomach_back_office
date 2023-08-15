import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveSubTypeComponent } from './remove-subtype.component';

describe('RemoveComponent', () => {
  let component: RemoveSubTypeComponent;
  let fixture: ComponentFixture<RemoveSubTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveSubTypeComponent]
    });
    fixture = TestBed.createComponent(RemoveSubTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
