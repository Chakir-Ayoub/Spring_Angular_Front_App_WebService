import { HttpErrorResponse } from '@angular/common/http';
import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { AddressService } from 'src/app/services/address.service';
import { SignUpService } from 'src/app/services/sign-up.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ]
})
export class SignUpComponent {
  UserForm: FormGroup;
  message:any;
  constructor(  private _fb: FormBuilder,
    private _signUpService: SignUpService,
    @Inject(MAT_DIALOG_DATA) public data: Address,
    private router: Router, ){
      this.UserForm = this._fb.group({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        admin:0
      });
    }

    onSubmit() {
      let user = this.UserForm.value;
      this._signUpService.Sign_Up(user).subscribe({
        next: (data) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'User added successfully',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigateByUrl('/login');
        },
        error: (error: HttpErrorResponse) => {
          this.message = error.message;
          Swal.fire({
            icon: 'error',
            title: this.message
          });
        }
      });
    }
}
