import { Todo } from './../../Models/todo';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoClass } from 'src/app/Models/todo-class';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-checked',
  templateUrl: './checked.component.html',
  styleUrls: ['./checked.component.scss']
})
export class CheckedComponent {
  todos: TodoClass[] = [];
  loading:boolean = true;
  constructor(private todoSvc:TodoServiceService,private router: Router, route:ActivatedRoute){}
  ngOnInit(){

    this.getTodos();

  }

  getTodos(){
    this.todoSvc.getTodo().then(resp =>{
      this.todos = resp.filter(todo => !todo.completed)
      this.loading = false;
    })
  }
  deleteNote(id:number =  0){
    this.todoSvc.deleteTodo(id).then(res => {

      this.getTodos();
    })
    }

    checked(todo:TodoClass){
      if(!todo.completed) {
        todo.completed = true;
        console.log(todo);
      }else{
        todo.completed = false
        console.log(todo);
      }
      this.todoSvc.editTodo(todo).then(res => {

        this.getTodos();
      })
    }
  /*   searchInput(e:any){
      let value = e.target.value.toLowerCase()
      this.todos.forEach(note =>{
        let isVisible = note.title.toLowerCase().includes(value) || note.subtitle.toLowerCase().includes(value)
         note.classList.toggle('hide',!isVisible)
      })
    } */
}