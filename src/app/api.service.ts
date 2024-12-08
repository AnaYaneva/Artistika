import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from './types/comment';
import { Workshop } from './types/workshop';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  // getPosts(limit?: number) {
  //   let url = `/api/posts`;
  //   if (limit) {
  //     url += `?limit=${limit}`;
  //   }

  //   return this.http.get<Post[]>(url);
  // }

  // getWorkshops() {
  //   return this.http.get<Workshop[]>(`/api/workshops`);
  // }

  // getSingleWorkshop(id: string) {
  //   return this.http.get<Workshop>(`/api/workshops/${id}`);
  // }

  createWorkshop(refPhoto: string, finalPhoto: string, video: string, title: string, description: string) {
    const payload = { refPhoto, finalPhoto, video, title, description };
    return this.http.post<Workshop>(`/api/workshops`, payload);
  }

  // CRUD operations
  // update -> http.put
  // updateTheme(themeId: string, themeName: string, postText: string) {
  //   const payload = { themeName, postText };
  //   return this.http.put<Theme>(`/api/themes/${themeId}`, payload);
  // }

  // updatePost(themeId: string, postId: string) {
  //   const payload = {};
  //   return this.http.put<Theme>(
  //     `/api/themes/${themeId}/posts/${postId}`,
  //     payload
  //   );
  // }

  // delete -> http.delete theme ID
  // deletePost(themeId: string, postId: string) {
  //   return this.http.delete(`/api/themes/${themeId}/posts/${postId}`);
  // }
}
