import { Component } from '@angular/core';

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  productForm: FormGroup;
  constructor(private fb: FormBuilder) {

    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      user: ['', [Validators.required]
    ],
      // email: ['', [Validators.required ,Validators.email]],
      email: ['', [
        Validators.required,
        Validators.pattern('(^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$)')
      ],
    ],

      pass: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]).{8,20})')
        ],
      ],
      conpass: ['',
        [
          Validators.required,
          Validators.minLength(8),
        ],
      ],
    });
  }
  
  get getProductFormControls() {
    return this.productForm.controls
  }

  ngOnInit(): void {}

  handleSubmitForm() {
    console.log(this.productForm);
  }

  
}

