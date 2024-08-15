import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-subject-generator',
  templateUrl: './subject-generator.component.html',
  styleUrls: ['./subject-generator.component.scss']
})
export class SubjectGeneratorComponent {

  emailContent: string = '';
  subjectLines: string[] = [];
  errorMessage: string = '';

  constructor(private emailService: EmailService) { }

  generateSubjectLines() {
    this.errorMessage = '';
    this.emailService.generateSubjectLines(this.emailContent)
      .subscribe({
        next: lines => this.subjectLines = lines,
        error: err => this.errorMessage = 'Failed to generate subject lines. Please try again.'
      });
  }
}
