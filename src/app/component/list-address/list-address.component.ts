import { Address } from './../../models/address';
import { AddressService } from './../../services/address.service';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import Swal from 'sweetalert2';
import {  Router } from "@angular/router";

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css'],
  providers: [
    ListAddressComponent
  ]

})
export class ListAddressComponent implements OnInit {


  constructor(    private injector: Injector,
    private addressService: AddressService,private route:Router) { }

  addresse: Address[] = [];

  ngOnInit(): void {
    this.getAllAddress();

  }

  getAllAddress() {
    this.addressService.getAll().subscribe((res: Address[]) => {
      this.addresse = res;
    });
  }

  DeleteAddress(id: string){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.addressService.delete(id).subscribe(data => {
          console.log(data);
          this.getAllAddress();
        });
        Swal.fire(
          'Deleted!',

          'The Address has been deleted.',
          'success'
        )
      }
    })
  }


  UpdateAddress(id:string){
    this.route.navigateByUrl("/address/edit/"+id);
  }

}
