import { InjectionToken, Provider } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

type TastStatusOptionsType={
  value:'open'|'in-progress'|'done';
  taskStatus:TaskStatus;
  text:string;
}

export const TAST_STATUS_OPTIONS=new InjectionToken<TastStatusOptionsType[]>('task-status-options');

export const TastStatusOptions:TastStatusOptionsType[] = [
  {
    value:'open',
    taskStatus:'OPEN',
    text:'Open'
  },
  {
    value:'in-progress',
    taskStatus:'IN_PROGRESS',
    text:'In-Progress'
  },
  {
    value:'done',
    taskStatus:'DONE',
    text:'Completed'
  }
]

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export const taskStatusOptionsProvider:Provider={
  provide:TAST_STATUS_OPTIONS,
  useValue:TastStatusOptions
  };
