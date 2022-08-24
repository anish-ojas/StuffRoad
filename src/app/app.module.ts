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
import {MenuModule} from 'primeng/menu';
import {MultiSelectModule} from 'primeng/multiselect';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CookiePolicyComponent } from './pages/cookie-policy/cookie-policy.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { CartComponent } from './pages/cart/cart.component';
import {DropdownModule} from 'primeng/dropdown';
import { TrackComponent } from './pages/track/track.component';
import { VendorRegistrationComponent } from './pages/vendor-registration/vendor-registration.component';
import { EssentialComponent } from './pages/essential/essential.component';
import { ErrorComponent } from './pages/error/error.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputNumberModule} from 'primeng/inputnumber';
import {PasswordModule} from 'primeng/password';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {StepsModule} from 'primeng/steps';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductSliderComponent,
    FooterComponent,
    ProductComponent,
    SearchComponent,
    LoginComponent,
    ContactComponent,
    AboutUsComponent,
    CookiePolicyComponent,
    TermsConditionsComponent,
    WishlistComponent,
    CartComponent,
    TrackComponent,
    VendorRegistrationComponent,
    EssentialComponent,
    ErrorComponent,
    CheckoutComponent,

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
    SliderModule,
    MenuModule,
    MultiSelectModule,
    DropdownModule,
    RadioButtonModule,
    MessagesModule,
    MessageModule,
    KeyFilterModule,
    InputNumberModule,
    PasswordModule,
    InputTextareaModule,
    StepsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
