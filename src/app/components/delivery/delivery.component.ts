import { Component, OnInit } from '@angular/core';
import {DeliveryService} from "./delivery.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html'
})
export class DeliveryComponent implements OnInit {
  form: FormGroup;

  errors = {
    required: 'Поле обязательно для заполнения',
    patternPhone: 'Допускаются только числовые значения',
  }

  constructor(
    private delivery: DeliveryService,
    private fb: FormBuilder,
    private toast: ToastrService,
  ) {}

  get name() {
    return this.form.get('name')
  }

  get address() {
    return this.form.get('address')
  }

  get phone() {
    return this.form.get('phone')
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    })
  }

  inputName(event: Event) {
    event.preventDefault();

    this.form.patchValue({
      name: (event.target as HTMLInputElement).value.replace(/\./g, '')
    })
  }

  send() {
    this.form.disable();

   this.delivery.send(this.form.value).subscribe(() => {
     this.toast.success('Форма успешно отправлена!');

     this.form.enable();
     this.form.reset();
   })
  }
}
