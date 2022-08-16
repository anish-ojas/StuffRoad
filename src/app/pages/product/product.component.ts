import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  images1!: string[];
  images2!: string[];
  galleriaImages!: string[];
  selectedImageIndex2: number = 0;
  products:any;
  constructor() { }

  ngOnInit(): void {

    this.images1 = [
      'product-overview-2-1.png',
      'product-overview-2-2.png',
      'product-overview-2-3.png',
      'product-overview-2-4.png'
  ];

  this.images2 = [
      'product-overview-3-1.png',
      'product-overview-3-2.png',
      'product-overview-3-3.png',
      'product-overview-3-4.png'
  ];

  this.galleriaImages = [
      'product-overview-4-1.png',
      'product-overview-4-2.png',
      'product-overview-4-3.png'
  ];
  this.products=[
    {quantity:'20-50',discount:'2%',discountedPirce:'₹0.00'},
    {quantity:'51-100',discount:'4%',discountedPirce:'₹0.00'},
    {quantity:'101-150',discount:'6%',discountedPirce:'₹0.00'}
  ]
  }

}
