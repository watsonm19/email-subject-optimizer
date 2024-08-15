import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualSubjectGeneratorComponent } from './casual-subject-generator.component';

describe('CasualSubjectGeneratorComponent', () => {
  let component: CasualSubjectGeneratorComponent;
  let fixture: ComponentFixture<CasualSubjectGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasualSubjectGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasualSubjectGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
