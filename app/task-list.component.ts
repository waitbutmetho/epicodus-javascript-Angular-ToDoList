import { Component, EventEmitter  } from 'angular2/core';
import { Task                     } from './task.model';
import { TaskComponent            } from './task.component';
import { EditTaskDetailsComponent } from './edit-task-details.component';
import { NewTaskComponent         } from './new-task.component';
import { DonePipe                 } from './done.pipe';

@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  pipes: [DonePipe],
  directives: [TaskComponent, EditTaskDetailsComponent, NewTaskComponent],
  templateUrl: 'app/task-list.component.html'
})
export class TaskListComponent {
  public onTaskSelect: EventEmitter<Task>;
  public taskList: Task[];
  public selectedTask: Task;
  public filterDone: string = "notDone";
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(clickedTask: Task): void {
    if(this.selectedTask === clickedTask)
      clickedTask.markAsDone();
    console.log('child', clickedTask);
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
  createTask(description:string) {
    this.taskList.push(
      new Task(description, this.taskList.length)
    );
  }
  onChange(filterOption) {
    this.filterDone = filterOption;
    console.log(this.filterDone);
  }
}
