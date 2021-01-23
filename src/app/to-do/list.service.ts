import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

export interface Task {
  id: string;
  candidate: string;
  task: string;
  is_completed: number
}

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  formData(task: Task) {
    const formData = new FormData();
    formData.append("id", task.id);
    formData.append("candidate", task.candidate);
    formData.append("task", task.task);
    formData.append("is_completed", String(task.is_completed));
    return formData;
  }

  public getTasks(name: string, surname: string) {
    return this.http.get(`https://angular.massivepixel.io/api/${surname}.${name}`).pipe(
      pluck('data'));
  }

  public updateTask(name: string, surname: string, id: string, task: Task) {
    return this.http.post(`https://angular.massivepixel.io/api/${surname}.${name}/${id}`, this.formData(task));
  }

  public addTask(name: string, surname: string, task: Task) {
    return this.http.post(`https://angular.massivepixel.io/api/${surname}.${name}`, this.formData(task));
  }

  public deleteTask(name: string, surname: string, id: string) {
    return this.http.delete(`https://angular.massivepixel.io/api/${surname}.${name}/${id}`);
  }
}
