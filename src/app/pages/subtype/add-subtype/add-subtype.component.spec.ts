import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSubTypeComponent } from './add-subtype.component';

describe('AddTypeComponent', () => {
  let component: AddSubTypeComponent;
  let fixture: ComponentFixture<AddSubTypeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
