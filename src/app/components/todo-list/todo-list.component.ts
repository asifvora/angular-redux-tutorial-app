import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { ITodo } from '../../model/todo';
import { addTodo, toggleTodo, removeTodo } from '../../actions/TodoActions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select() todos;
  todosData = [];
  model: ITodo = {
    id: 0,
    description: "",
    responsible: "",
    priority: "low",
    isCompleted: false
  };

  constructor(private ngRedux: NgRedux<undefined>) { }

  ngOnInit() {
    this.todos.subscribe(todos => {
      this.todosData = todos.todos;
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