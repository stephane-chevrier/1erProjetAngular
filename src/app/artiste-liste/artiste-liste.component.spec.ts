import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisteListeComponent } from './artiste-liste.component';

describe('ArtisteListeComponent', () => {
  let component: ArtisteListeComponent;
  let fixture: ComponentFixture<ArtisteListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtisteListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisteListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
