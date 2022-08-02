import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination, Navigation, SwiperOptions } from "swiper";
SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // config: SwiperOptions = {
  //   slidesPerView: 1,
  //   spaceBetween: 50,
  //   navigation: true,
  //   pagination: { clickable: true },
  //   scrollbar: { draggable: true },
  // };
  // onSwiper([swiper]:any) {
  //   console.log(swiper);
  // }
  // onSlideChange() {
  //   console.log('slide change');
  // }

}
