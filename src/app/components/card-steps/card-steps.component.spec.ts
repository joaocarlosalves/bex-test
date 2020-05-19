import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStepsComponent } from './card-steps.component';

describe('CardStepsComponent', () => {
  let component: CardStepsComponent;
  let fixture: ComponentFixture<CardStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
