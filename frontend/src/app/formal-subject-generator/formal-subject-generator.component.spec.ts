import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalSubjectGeneratorComponent } from './formal-subject-generator.component';

describe('FormalSubjectGeneratorComponent', () => {
  let component: FormalSubjectGeneratorComponent;
  let fixture: ComponentFixture<FormalSubjectGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormalSubjectGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormalSubjectGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
