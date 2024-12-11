import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from './types/comment';
import { Workshop } from './types/workshop';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  createWorkshop(refPhoto: string, finalPhoto: string, video: string, title: string, description: string) {
    const payload = { refPhoto, finalPhoto, video, title, description };
    return this.http.post<Workshop>(`/api/workshops`, payload);
  }

}
