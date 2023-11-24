import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TaskPassService } from '../task-pass.service';

@Component({
  selector: 'app-list-check',
  templateUrl: './list-check.component.html',
  styleUrls: ['./list-check.component.css']
})
export class ListCheckComponent implements OnInit, AfterViewInit {
   constructor(
    private taskPass: TaskPassService
   ) {}

   listCheck: string = '';
   checkString: string = '';
   
   ngOnInit(): void {
    this.taskPass.$cardComponentInputdataObservable.subscribe(val => {
      this.checkString = val;
      console.log(val, 'ngOnInit');
    })
   }

   
ngAfterViewInit(): void {
  this.taskPass.$cardComponentInputdataObservable.subscribe(val => {
    this.checkString = val;
    console.log(val, 'ngAfterViewInit');
  })
}

displayValueOnList() : void {
 this.listCheck = this.checkString;
}
}
