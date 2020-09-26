import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosFocusComponent } from './candidatos-focus.component';

describe('CandidatosFocusComponent', () => {
  let component: CandidatosFocusComponent;
  let fixture: ComponentFixture<CandidatosFocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatosFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatosFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
