import { ListAddressComponent } from './../list-address/list-address.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Address } from 'src/app/models/address';
import { AddressService } from 'src/app/services/address.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css'],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    ListAddressComponent
  ]
})
export class AddAddressComponent implements OnInit {
  AddressForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _addressService: AddressService,
    @Inject(MAT_DIALOG_DATA) public data: Address,
    private router: Router,
  ) {
    this.AddressForm = this._fb.group({
      city: '',
      country: '',
      street: '',
      postal: '',
      type: ''
    });
  }

  ngOnInit(): void {
    this.AddressForm.patchValue(this.data);
  }

  message: any;

  onSubmit() {
    let address = this.AddressForm.value;
    console.log(address);
    this._addressService.addAdresse(address).subscribe({
      next: (data) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Address added successfully',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigateByUrl('/address');
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
