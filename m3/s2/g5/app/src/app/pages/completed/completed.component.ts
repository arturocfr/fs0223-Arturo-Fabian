import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoClass } from 'src/app/Models/todo-class';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent {
  todos: TodoClass[] = [];
  loading:boolean = true;
  constructor(private todoSvc:TodoServiceService,private router: Router, private route: ActivatedRoute){
  }
  ngOnInit(){

    this.getTodos();

  }

  getTodos(){
    this.todoSvc.getTodo().then(resp =>{
      this.todos = resp.filter(todo => todo.completed)
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
      this.router.navigateByUrl('/')
    }
    back()
    {
      console.log('ciao');

      this.router.navigateByUrl('/')
    }
}