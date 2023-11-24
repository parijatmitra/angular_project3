import { Component, OnInit } from '@angular/core';
import { TaskPassService } from '../task-pass.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  constructor(
    private taskPass: TaskPassService
  ) {};

  cardOneText: string = '';

  ngOnInit(): void {

  }

  submitClickResult(): void {
    this.taskPass.emitfromCardComponent(this.cardOneText);
  }
}
