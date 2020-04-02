import { Component, Output,EventEmitter  } from '@angular/core';


@Component({
    selector: 'student',
    inputs:['name'],
    template: '<P (click)="onClicked()">{{name}}</P>'
})

export class Student{
   name:string;
   @Output() studentSelected:EventEmitter<string>;

   constructor(){
       this.studentSelected = new EventEmitter();
   }
   onClicked(){
       this.studentSelected.emit(this.name);
   }
}