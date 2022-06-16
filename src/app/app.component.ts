import { Component, OnInit } from '@angular/core';
import { TodoClass } from './model/todo-class';
import { TODOS } from './model/todos-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'todoAngular';
  todosArray: TodoClass[];

  constructor(){
    this.todosArray = TODOS
  }


  ngOnInit(): void {
   console.log (TODOS);
    ;
  }
  
}
