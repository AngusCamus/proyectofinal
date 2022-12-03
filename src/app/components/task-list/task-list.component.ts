import { Component } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  //TODO reformular como lsita de tareas

  tarea1: ITask = {
    title: "Task 1",
    description: "Task description 1",
    completed: false,
    level: Levels.Info
  }
  tarea2: ITask = {
    title: "Task 2",
    description: "Task description 1",
    completed: true,
    level: Levels.Urgent
  }
}
