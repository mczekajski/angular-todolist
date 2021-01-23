import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from '../list.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteEvent = new EventEmitter();
  @Output() toggleDoneEvent = new EventEmitter();

  toggleDone(): void {
    this.task.is_completed = Number(!this.task.is_completed);
    this.toggleDoneEvent.next(this.task)
  }

  deleteTask(): void {
    this.deleteEvent.next(this.task.id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
