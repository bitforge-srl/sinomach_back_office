import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTypeComponent } from './add-type.component';

describe('AddTypeComponent', () => {
  let component: AddTypeComponent;
  let fixture: ComponentFixture<AddTypeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
