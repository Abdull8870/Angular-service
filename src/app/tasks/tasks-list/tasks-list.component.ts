import { Component, computed, signal,inject } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TaskService } from '../task.service';
import { taskStatusOptionsProvider, TAST_STATUS_OPTIONS, TastStatusOptions } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers:[
    taskStatusOptionsProvider
  ]
})
export class TasksListComponent {
  private selectedFilter = signal<string>('all');
  taskStatusOptions=inject(TAST_STATUS_OPTIONS);
  // tasks = this.taskService.allTask;
  tasks=computed(()=>{
    switch(this.selectedFilter()){
      case 'all':
          return this.taskService.allTask();
      case 'open':
          return this.taskService.allTask().filter((task)=> task.status==='OPEN')
      case 'in-progress':
          return this.taskService.allTask().filter((task)=> task.status==='IN_PROGRESS')
      case 'Completed':
        return this.taskService.allTask().filter((task)=>task.status==='DONE')
      default:
        return this.taskService.allTask();
    }
  });

  constructor(private taskService:TaskService){}

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
