import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  handleFormSubmit(productForm: any) {
    console.log(productForm);
    if(productForm.valid){
      console.log(productForm.value)
    }
  }
}
