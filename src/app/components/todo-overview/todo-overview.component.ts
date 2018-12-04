import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { clearTodos } from '../../actions/TodoActions';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {
  @select() todos;
  todosData = [];
  lastUpdate = null;

  constructor(private ngRedux: NgRedux<undefined>) { }

  ngOnInit() {

    this.todos.subscribe(todos => {
      this.todosData = todos.todos;
      this.lastUpdate = todos.lastUpdate;
    });
  }

  clearTodos() {
    this.ngRedux.dispatch(clearTodos());
  }
}