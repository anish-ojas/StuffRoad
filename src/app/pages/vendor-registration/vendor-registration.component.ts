import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-registration',
  templateUrl: './vendor-registration.component.html',
  styleUrls: ['./vendor-registration.component.scss']
})
export class VendorRegistrationComponent implements OnInit {
  profession:any;
  selectProf:any;
  items: any;
  constructor() { }

  ngOnInit(): void {
    this.profession=[
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ]
    this.items = [{
      label: 'Personal',
      routerLink: 'personal'
  },
  {
      label: 'Seat',
      routerLink: 'seat'
  },
  {
      label: 'Payment',
      routerLink: 'payment'
  },
  {
      label: 'Confirmation',
      routerLink: 'confirmation'
  }
];
  }

}
