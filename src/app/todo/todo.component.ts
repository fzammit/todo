import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      id: 1,
      userId: 1,
      title: 'Nouvelle tâche',
      completed: true
    },
    {
      id: 2,
      userId: 1,
      title: 'Une autre tâche',
      completed: true
    }
  ];

  todo: Todo;

  constructor(private httpClient: HttpClient) {}
  private todoListURL = 'http://localhost:8000/todo/1';

  ngOnInit(): void {
    this.httpClient.get(this.todoListURL).subscribe(response => {
      console.log(response);
      this.todo = new Todo(response);
      console.log(this.todo);
    });
  }
}
