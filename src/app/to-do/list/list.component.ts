import { Component, Input, OnInit } from '@angular/core';
import { ListService, Task } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() name: string;
  @Input() surname: string;

  tasks;
  newTask: string;

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getTasks();
  }
  
  getTasks() {
    this.listService.getTasks(this.name, this.surname).subscribe(data => {
      this.tasks = data;
    });
  }

  toggleDone(task: Task) {
    this.listService.updateTask(this.name, this.surname, task.id, task).subscribe(data => console.log(data));
  }

  deleteTask(id: string) {
    this.listService.deleteTask(this.name, this.surname, id).subscribe(data => console.log(data));
  }
  
  addTask = (event: Event) => {
    event.preventDefault();
    const task = { id: "", candidate: `${this.surname}.${this.name}`, task: this.newTask, is_completed: 0 }
    this.listService.addTask(this.name, this.surname, task).subscribe(data => console.log(data));
    this.getTasks();
  }
}
