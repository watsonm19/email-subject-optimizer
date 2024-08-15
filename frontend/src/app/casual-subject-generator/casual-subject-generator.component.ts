import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-casual-subject-generator',
  templateUrl: './casual-subject-generator.component.html',
  styleUrls: ['./casual-subject-generator.component.scss']
})
export class CasualSubjectGeneratorComponent {

  emailContent: string = '';
  subjectLines: string[] = [];
  errorMessage: string = '';

  constructor(private emailService: EmailService) { }

  generateCasualSubjectLines() {
    this.errorMessage = '';
    this.emailService.generateCasualSubjectLines(this.emailContent)
      .subscribe({
        next: lines => this.subjectLines = lines,
        error: err => this.errorMessage = 'Failed to generate casual subject lines. Please try again.'
      });
  }
}
