import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stuffRoad';
  images!: string[];

  responsiveOptions:any[] = [
  {
      breakpoint: '768px',
      numVisible: 3
  },
  {
      breakpoint: '560px',
      numVisible: 2
  }];
  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.images = [
      'product-quickview-2-1.png',
      'product-quickview-2-2.png',
      'product-quickview-2-3.png',
      'product-quickview-2-4.png',
      'product-quickview-2-5.png',
      'product-quickview-2-6.png'
  ];
}
}
