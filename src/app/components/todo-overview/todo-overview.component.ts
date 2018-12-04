import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { clearTodos } from '../../actions/TodoActions';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {
  todos = [];
  lastUpdate = null;

  constructor(private ngRedux: NgRedux<undefined>) { }

  ngOnInit() {
    this.ngRedux.subscribe(() => {
      let state = this.ngRedux.getState();
      this.todos = state.todos.todos;
    });
  }

  clearTodos() {
    this.ngRedux.dispatch(clearTodos());
  }
}