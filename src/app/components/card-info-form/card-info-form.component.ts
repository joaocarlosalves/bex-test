import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-card-info-form',
  templateUrl: './card-info-form.component.html',
  styleUrls: ['./card-info-form.component.scss']
})
export class CardInfoFormComponent implements OnInit {

  form: FormGroup;

  newCardForm = new FormGroup({
    cardNumber: new FormControl(''),
    cardName: new FormControl(''),
    cardValid: new FormControl(''),
    cardCVV: new FormControl(''),
    cardPayments: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cardNumber: ['', [
        Validators.required, 
      ]],
      cardName: ['', [
        Validators.required,
      ]],
      cardValid: ['', [
        Validators.required
      ]],
      cardCVV: ['', [
        Validators.required
      ]],
      cardPayments: [null, [
        Validators.required
      ]],
    });
  }

  isValidField(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched)
    );
  }

  validateAllFormFields(formGroup: FormGroup) {       
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);       
      console.log(field);
      if (control instanceof FormGroup) {       
        alert('213r');
        this.validateAllFormFields(control);
      }
    });
  }

  async submit() {
    if (this.form.valid) {
      console.log(this.form);
      console.log('Form enviado');
    } else {
      await this.validateAllFormFields(this.form);
      console.log('Form não enviado');
    }
  }
  

}
