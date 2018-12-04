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
  @select() lastUpdate;

  constructor(private ngRedux: NgRedux<undefined>) { }

  ngOnInit() {
    let todos = this.ngRedux.getState();
    console.log('asif vora', todos);
    console.log('todos', this.ngRedux);
  }

  clearTodos() {
    this.ngRedux.dispatch(clearTodos());
  }
}