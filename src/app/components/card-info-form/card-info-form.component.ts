import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-info-form',
  templateUrl: './card-info-form.component.html',
  styleUrls: ['./card-info-form.component.scss']
})
export class CardInfoFormComponent implements OnInit {

  newCardForm = new FormGroup({
    cardNumber: new FormControl(''),
    cardName: new FormControl(''),
    cardValid: new FormControl(''),
    cardCVV: new FormControl(''),
    cardPayments: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }
  

}
