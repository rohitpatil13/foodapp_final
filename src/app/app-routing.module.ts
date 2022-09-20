import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFoodOrderComponent } from './all-food-order/all-food-order.component';
import { AllFoodProductComponent } from './all-food-product/all-food-product/all-food-product.component';
import { AllItemComponent } from './all-item/all-item.component';
import { EditFoodOrderComponent } from './edit-food-order/edit-food-order.component';
import { EditFoodProductComponent } from './edit-food-product/edit-food-product/edit-food-product.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { FoodOrderComponent } from './food-order/food-order.component';
import { FoodProductComponent } from './food-product/food-product/food-product.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login/login.component';
import { AddMenuComponent } from './Menu/add-menu/add-menu.component';

import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:"food-order", component:FoodOrderComponent},
  {path:"all-food-order", component:AllFoodOrderComponent},
  {path:"updateorders/:id", component:EditFoodOrderComponent},
  {path:"item", component:ItemComponent},
  {path:"all-item", component:AllItemComponent},
  {path:"updateitems/:id", component:EditItemComponent},
  {path:"item", component:FoodOrderComponent},
  {path: "registration",component:RegistrationComponent },
  {path:"food-product",component:FoodProductComponent},
  {path:"add-menu",component:AddMenuComponent},
  {path:"all-food-product",component:AllFoodProductComponent},
  {path:"updateproducts/:id",component:EditFoodProductComponent},
  {path:"login",component:LoginComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
