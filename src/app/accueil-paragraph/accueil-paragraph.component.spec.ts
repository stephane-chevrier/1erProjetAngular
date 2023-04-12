import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilParagraphComponent } from './accueil-paragraph.component';

describe('AccueilParagraphComponent', () => {
  let component: AccueilParagraphComponent;
  let fixture: ComponentFixture<AccueilParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilParagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
