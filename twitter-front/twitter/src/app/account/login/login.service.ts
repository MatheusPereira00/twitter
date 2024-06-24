import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = 'http://localhost:8080'; // URL base do seu backend

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/login`; // Endpoint de login no seu backend
    const body = { username, password }; // Dados a serem enviados no corpo da requisição

    return this.http.post(url, body);
  }
}
