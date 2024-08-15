import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'http://127.0.0.1:5000/api/generate-subject-lines';

  constructor(private http: HttpClient) { }

  generateSubjectLines(emailContent: string): Observable<string[]> {
    return this.http.post<string[]>(this.apiUrl, { emailContent });
  }
}
