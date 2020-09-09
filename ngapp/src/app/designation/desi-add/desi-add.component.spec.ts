import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesiAddComponent } from './desi-add.component';

describe('DesiAddComponent', () => {
  let component: DesiAddComponent;
  let fixture: ComponentFixture<DesiAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesiAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesiAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
