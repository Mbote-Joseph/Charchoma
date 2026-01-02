import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanExperienceComponent } from './ocean-experience.component';

describe('OceanExperienceComponent', () => {
  let component: OceanExperienceComponent;
  let fixture: ComponentFixture<OceanExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OceanExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OceanExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
