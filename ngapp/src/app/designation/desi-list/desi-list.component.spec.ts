import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesiListComponent } from './desi-list.component';

describe('DesiListComponent', () => {
  let component: DesiListComponent;
  let fixture: ComponentFixture<DesiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
