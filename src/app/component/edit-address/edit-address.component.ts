import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { AddressService } from 'src/app/services/address.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css'],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ]
})
export class EditAddressComponent  {
  addressForm: FormGroup;
  Addressid:string;
  adr :Address;

  constructor(
    private activeroute: ActivatedRoute,
    private _fb: FormBuilder,
    private _addressservice: AddressService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { this.Addressid = this.activeroute.snapshot.paramMap.get('id');
  this._addressservice.GetById(this.Addressid).subscribe((result: any) => {
    this.adr = result;
    this.addressForm = this._fb.group({
      city: new FormControl(this.adr.city),
      country: new FormControl(this.adr.country),
      street: new FormControl(this.adr.street),
      postal: new FormControl(this.adr.postal),
      type: new FormControl(this.adr.type)
    });
  }, (error: any) => {

  });}

  ngOnInit(): void {

  }

  Update(): void {

    if (this.addressForm.valid) {
      let address = this.addressForm.value;

      this._addressservice.Update(this.Addressid,address).subscribe({
        next:(data)=>{
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
          }).then((result) => {
            if (result.isConfirmed) {
              // Call your address service update method here
              // this.addressService.update(this.addressForm.value);
              Swal.fire(
                'Updated!',
                'The Address has been updated.',
                'success'
              );
            }
          });
        }
      })

    }
  }
}
