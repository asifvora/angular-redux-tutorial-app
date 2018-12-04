import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import * as type from '../../constants';
import { ITodo } from '../../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select() todos;
  model: ITodo = {
    id: 0,
    description: "",
    responsible: "",
    priority: "low",
    isCompleted: false
  };

  constructor(private ngRedux: NgRedux<undefined>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.ngRedux.dispatch({ type: type.ADD_TODO, todo: this.model });
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: type.TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({ type: type.REMOVE_TODO, id: todo.id });
  }
}