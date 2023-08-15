import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSubTypeComponent } from './table-subtype.component';

describe('TableComponent', () => {
  let component: TableSubTypeComponent;
  let fixture: ComponentFixture<TableSubTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableSubTypeComponent]
    });
    fixture = TestBed.createComponent(TableSubTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
