import { Component,Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  task!:string;
  day!:string;
  reminder:boolean=false;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  onSubmit(){
    if(!this.task){
      alert("Please add a task!");
      return;
    }

    const newTask = {
      text: this.task,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.task='';
    this.day='';
    this.reminder=false;
  }
}
