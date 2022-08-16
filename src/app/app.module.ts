import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { StyleClassModule } from 'primeng/styleclass';
import { ProductSliderComponent } from './pages/product-slider/product-slider.component';
import { SwiperModule } from 'swiper/angular';
import {TabViewModule} from 'primeng/tabview';
import {AvatarModule} from 'primeng/avatar';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './pages/product/product.component';
import {TableModule} from 'primeng/table';
import { SearchComponent } from './pages/search/search.component';
import {DividerModule} from 'primeng/divider';
import {AccordionModule} from 'primeng/accordion';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import {GalleriaModule} from 'primeng/galleria';
import {SliderModule} from 'primeng/slider';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductSliderComponent,
    FooterComponent,
    ProductComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    BadgeModule,
    StyleClassModule,
    SwiperModule,
    TabViewModule,
    AvatarModule,
    TableModule,
    BrowserAnimationsModule,
    DividerModule,
    AccordionModule,
    CheckboxModule,
    FormsModule,
    GalleriaModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
