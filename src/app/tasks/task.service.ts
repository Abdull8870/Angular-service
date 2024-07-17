import { Injectable, signal , inject} from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoggingService } from "../logging.service";

@Injectable({
    providedIn:'root'
})
export class TaskService {

    private loggingService=inject(LoggingService);

    private tasks=signal<Task[]>([]);

    allTask=this.tasks.asReadonly();

    addTask(taskData:{title:string,description:string}){
        const newTask:Task={
            ...taskData,
            id:Math.random.toString(),
            status:'OPEN'

        }
        this.tasks.update((oldTask)=>[...oldTask,newTask])
        this.loggingService.log("A new task has been addded");
    }

    updateTaskStatus(taskId:string,newStatus:TaskStatus){
        this.tasks.update((oldTask)=>
            oldTask.map((task)=>
                task.id===taskId?{...task,status:newStatus}:task
            )
        );

    }

}