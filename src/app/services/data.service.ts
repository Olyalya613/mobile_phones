import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User { id: number; name: string; email: string; }

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly base = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.base}/users`);
  }

  // Compatibility shim for AppLogicService (PR-06)
  getData(): string[] {
    return [
      'Apple — iPhone 15 Pro',
      'Samsung — Galaxy S24',
      'Google — Pixel 9',
      'Xiaomi — Xiaomi 14',
      'OnePlus — OnePlus 12'
    ];
  }
}
