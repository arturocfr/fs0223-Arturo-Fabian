import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {
@Input() title!: string
@Input() subtitle!: string
@Input( ) link:any

@Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();
@Output('check') checkEvent: EventEmitter<void> = new EventEmitter<void>()
constructor(){}


onXButtonClick(){
  this.deleteEvent.emit()
}
check(){
  this.checkEvent.emit()
}
}