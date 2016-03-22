import { Component, EventEmitter } from 'angular2/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
  <form (submit)="newTask(newDescription)" class="task-form">
    <label for="description">Create a task:</label>
    <input type="text" name="description" #newDescription>
  </form>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<String>;
  constructor() {
    this.onSubmitNewTask = new EventEmitter();
  }
  newTask(newDescription: HTMLInputElement): void {
    this.onSubmitNewTask.emit(newDescription.value);
    newDescription.value = "";
  }
}
