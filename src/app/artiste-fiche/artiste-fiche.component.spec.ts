import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisteFicheComponent } from './artiste-fiche.component';

describe('ArtisteFicheComponent', () => {
  let component: ArtisteFicheComponent;
  let fixture: ComponentFixture<ArtisteFicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtisteFicheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisteFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
