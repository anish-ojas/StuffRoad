import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  selectedValue: any = '';

  selectedValue2: any = '';

  date1: any;

  quantities1: number[] = [1, 1, 1];

  quantities2: number[] = [1, 1];

  value3!: any;

  value4!: any;

  checked: boolean = true;

  checked2: boolean = true;
  
  checked3: boolean = true;
  
  cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
  ];
  
  selectedCity!: any;
  
  selectedAddress: any = 'Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands';

  selectedCard: any = '';

  card1: any = '**** **** **** 1234';

  card2: any = '**** **** **** 1235';

  address1: any = 'Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands';
  
  address2: any = 'Jacob Obrechtstraat 6, 1071 KC Amsterdam The Netherlands';

  selectedDelivery: any = 'UPS';

  selectedPayment: any = 'Credit Card'
  
  ccRegex: RegExp = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
  
  cc!: any;

  cvc!: any;

  cvcRegex: RegExp = /^[0-9]{3,4}$/;

  exp!: any;

  expRegex: RegExp = /[0-9]{2}\/[0-9]{2}$/;
  constructor() { }

  ngOnInit(): void {
  }

}
