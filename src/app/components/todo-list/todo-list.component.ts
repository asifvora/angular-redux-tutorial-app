import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import * as type from '../../constants';
import { ITodo } from '../../model/todo';
import { addTodo, toggleTodo, removeTodo } from '../../actions/TodoActions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos = [];
  model: ITodo = {
    id: 0,
    description: "",
    responsible: "",
    priority: "low",
    isCompleted: false
  };

  constructor(private ngRedux: NgRedux<undefined>) { }

  ngOnInit() {
    this.ngRedux.subscribe(() => {
      let state = this.ngRedux.getState();
      this.todos = state.todos.todos;
    });
  }

  onSubmit() {
    this.ngRedux.dispatch(addTodo(this.model));
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch(toggleTodo(todo.id));
  }

  removeTodo(todo) {
    this.ngRedux.dispatch(removeTodo(todo.id));
  }
}