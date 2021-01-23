import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [ListComponent, TaskComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ListComponent]
})
export class ToDoModule { }
