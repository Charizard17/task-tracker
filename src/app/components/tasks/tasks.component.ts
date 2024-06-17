import { Component } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';
import { NgFor } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgFor, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = TASKS;
}
