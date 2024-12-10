import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workshop, CreateWorkshop } from '../types/workshop';
import { Observable } from 'rxjs';
import { Constant } from './../constants';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {

  workshopUrl = Constant.URL_BASE + '/workshops';


  constructor(private http: HttpClient) {
  }


  get(id: number): Observable<Workshop> {
    return this.http.get<Workshop>(`${this.workshopUrl}/${id}`);
  }

  getAll(): Observable<Workshop[]> {
    return this.http.get<Workshop[]>(`${this.workshopUrl}`);
  }

  create(workshop: CreateWorkshop): Observable<Workshop> {
    return this.http.post<Workshop>(`${this.workshopUrl}`, workshop);
  }

  update(workshop: Workshop): Observable<Workshop> {
    return this.http.put<Workshop>(`${this.workshopUrl}/${workshop.id}`, workshop);
  }

  delete(id: number) {
    return this.http.delete(`${this.workshopUrl}/${id}`);
  }
}
