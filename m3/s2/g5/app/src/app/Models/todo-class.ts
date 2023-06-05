import { Todo } from './todo';
export class TodoClass implements Todo {

  id?:number
  title:string
  completed:boolean
  subtitle:string
  constructor(title:string, completed:boolean,subtitle:string, id?:number){
    this.title = title;
    this.completed = completed;
    this.subtitle = subtitle;
  }
}