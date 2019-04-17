import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from '../../shared/interfaces/IStudent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentOnboardService {

  private studentUrl = 'api/students';

  constructor(private http: HttpClient) { }

  /** GET ALL students. */
  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.studentUrl);
  }

  /** GET student by id. */
  getStudent(id: number): Observable<IStudent> {
    const url = `${this.studentUrl}/${id}`;
    return this.http.get<IStudent>(url);
  }

  /** ADD student. */
  addStudent(student: IStudent): Observable<IStudent> {
    console.log(student);
    return this.http.post<IStudent>(this.studentUrl, student);
  }

  /** UPDATE existing student. */
  updateStudent(student: IStudent): Observable<IStudent> {
    return this.http.put<IStudent>(this.studentUrl, student);
  }

  /** DELETE a student. */
  deleteStudent(id: number): Observable<IStudent> {
    const url = `${this.studentUrl}/${id}`;
    console.log(url);
    return this.http.delete<IStudent>(url);
  }

}
