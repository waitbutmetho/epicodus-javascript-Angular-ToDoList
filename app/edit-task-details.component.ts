import { Component } from 'angular2/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task-details',
  inputs: ['task'],
  template: `
  <input [(ngModel)]="task.description">
  `
})
export class EditTaskDetailsComponent {
  public task: Task;
}
