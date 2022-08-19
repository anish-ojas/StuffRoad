import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  quantityOptions: any[] = [{label: '1', value: 1}, {label: '2', value: 2}, {label: '3', value: 3}, {label: '4', value: 4}];
  constructor() { }

  ngOnInit(): void {
  }

}
