import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieProviderComponent } from './movie-provider.component';

describe('MovieProviderComponent', () => {
  let component: MovieProviderComponent;
  let fixture: ComponentFixture<MovieProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
