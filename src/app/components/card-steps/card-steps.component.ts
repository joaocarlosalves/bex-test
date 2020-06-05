import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-steps',
  templateUrl: './card-steps.component.html',
  styleUrls: ['./card-steps.component.scss']
})
export class CardStepsComponent implements OnInit {

  step1 = true;
  step2 = false;
  step3 = false;

  constructor() { }

  ngOnInit(): void {
  }

}
