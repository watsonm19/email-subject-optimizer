import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-formal-subject-generator',
  templateUrl: './formal-subject-generator.component.html',
  styleUrls: ['./formal-subject-generator.component.scss']
})
export class FormalSubjectGeneratorComponent {

  emailContent: string = '';
  subjectLines: string[] = [];
  errorMessage: string = '';

  constructor(private emailService: EmailService) { }

  generateFormalSubjectLines() {
    this.errorMessage = '';
    this.emailService.generateFormalSubjectLines(this.emailContent)
      .subscribe({
        next: lines => this.subjectLines = lines,
        error: err => this.errorMessage = 'Failed to generate formal subject lines. Please try again.'
      });
  }
}
