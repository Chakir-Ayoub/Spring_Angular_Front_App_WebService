import { AddressService } from './../../services/address.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {

  constructor(private addressService:AddressService){}
  ngOnInit(): void {
    this.getAllAddress();
  }

  getAllAddress(){
    this.addressService.getAll().subscribe(res=>{
      console.log(res);
    })
  }
}
