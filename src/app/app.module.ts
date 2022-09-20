import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodOrderComponent } from './food-order/food-order.component';

import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { EditFoodOrderComponent } from './edit-food-order/edit-food-order.component';
import { RegistrationComponent } from './registration/registration.component';
import { AllFoodOrderComponent } from './all-food-order/all-food-order.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { AllItemComponent } from './all-item/all-item.component';
import { FoodProductComponent } from './food-product/food-product/food-product.component';
import { AddMenuComponent } from './Menu/add-menu/add-menu.component';
import { AllFoodProductComponent } from './all-food-product/all-food-product/all-food-product.component';
import { EditFoodProductComponent } from './edit-food-product/edit-food-product/edit-food-product.component';
import { LoginComponent } from './login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodOrderComponent,
  
    ItemComponent,
    EditFoodOrderComponent,
    RegistrationComponent,
    AllFoodOrderComponent,
    EditItemComponent,
    AllItemComponent,
    FoodProductComponent,
    AddMenuComponent,
    AllFoodProductComponent,
    EditFoodProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
