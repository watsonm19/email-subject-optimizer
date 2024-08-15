import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private formalApiUrl = 'http://localhost:5000/api/generate-formal-subject-lines';
  private casualApiUrl = 'http://localhost:5000/api/generate-casual-subject-lines';

  constructor(private http: HttpClient) { }

  generateFormalSubjectLines(emailContent: string): Observable<string[]> {
    return this.http.post<string[]>(this.formalApiUrl, { emailContent });
  }

  generateCasualSubjectLines(emailContent: string): Observable<string[]> {
    return this.http.post<string[]>(this.casualApiUrl, { emailContent });
  }
}
