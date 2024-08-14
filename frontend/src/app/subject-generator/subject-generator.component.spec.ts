import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectGeneratorComponent } from './subject-generator.component';

describe('SubjectGeneratorComponent', () => {
  let component: SubjectGeneratorComponent;
  let fixture: ComponentFixture<SubjectGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
