import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderSourceComponent } from './provider-source.component';

describe('ProviderSourceComponent', () => {
  let component: ProviderSourceComponent;
  let fixture: ComponentFixture<ProviderSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderSourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
