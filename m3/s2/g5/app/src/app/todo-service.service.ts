import { Injectable } from '@angular/core';
import { TodoClass } from './Models/todo-class';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  apiUrl = 'http://localhost:3000/todo'
  constructor() {}

  getSingleTodo(id:number): Promise<TodoClass[]>{
    {
      return fetch(this.apiUrl+ '/' + id).then(response => response.json());
    }

  }
  getTodo():Promise<TodoClass[]> {
    return fetch(this.apiUrl).then(response => response.json())
  }

  addTodo(todo:TodoClass):Promise<TodoClass>{
    return fetch(this.apiUrl, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    })
    .then(response => response.json())
  }

  editTodo(todo:TodoClass):Promise<TodoClass> {
    return fetch(this.apiUrl + '/' + todo.id, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    })
    .then(response => response.json())
  }
  deleteTodo(id:number = 0){
    return fetch(this.apiUrl+'/'+id,{
      method:'DELETE',//indico che voglio eliminare
    }).then(response => response.json());
  }
}