import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CustomersService } from 'src/app/services/customers.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
 form: FormGroup

  constructor(private signup: FormBuilder, private customerSignup : CustomersService, http: HttpClient){
    this.form = this.signup.group({
      name: [''],
      email: [''],
      password: [''],
      authType: ['customer']
    });
  }

  onSubmit(){
    this.customerSignup.postSignup(this.form.value).subscribe(response => {
     alert('Signup successful');
    },
    error => {
      console.error('Signup failed', error);
    }
    )
  }
}

