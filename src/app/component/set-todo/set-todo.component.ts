import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormData } from 'src/app/interface/form-data';

@Component({
  selector: 'app-set-todo',
  templateUrl: './set-todo.component.html',
  styleUrls: ['./set-todo.component.css'],
})
export class SetTodoComponent {
  @Output() forminfo: EventEmitter<FormData> = new EventEmitter<FormData>();

  data!: any;

  onSubmit(info: NgForm) {
    this.data = info.value;
    
    this.forminfo.emit(this.data);

    info.reset()
  }
}
