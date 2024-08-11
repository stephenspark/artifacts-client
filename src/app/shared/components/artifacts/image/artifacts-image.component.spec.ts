import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactsImageComponent } from './artifacts-image.component';

describe('ArtifactsImageComponent', () => {
  let component: ArtifactsImageComponent;
  let fixture: ComponentFixture<ArtifactsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtifactsImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtifactsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
