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

  constructor(private emailService: EmailService) { }

  generateSubjectLines() {
    this.emailService.generateSubjectLines(this.emailContent)
      .subscribe(lines => this.subjectLines = lines);
  }
}
