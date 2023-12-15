import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    LoginComponent,
    CarsPageComponent,
    CarFormComponent,
    CarsComponent,
    CarComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
