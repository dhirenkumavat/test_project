import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesiUpdateComponent } from './desi-update.component';

describe('DesiUpdateComponent', () => {
  let component: DesiUpdateComponent;
  let fixture: ComponentFixture<DesiUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesiUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesiUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
