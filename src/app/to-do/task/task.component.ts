import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from '../list.service';
import { ListService } from '../list.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteEvent = new EventEmitter();
  @Output() toggleDoneEvent = new EventEmitter();
  @Output() editEvent = new EventEmitter();

  showEditTaskForm = false;
  editedTask: string;

  constructor() { }
  
  ngOnInit(): void {
  }

  toggleDone(): void {
    this.task.is_completed = Number(!this.task.is_completed);
    this.toggleDoneEvent.next(this.task)
  }

  deleteTask(): void {
    this.deleteEvent.next(this.task.id);
  }

  editTask(): void {
    this.task.task = this.editedTask;
    this.editEvent.next(this.task);
  }

}
