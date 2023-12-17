import {Component, Input, OnInit} from '@angular/core';
import {ICar} from "../../../../interfaces";
import {CarService} from "../../../../services";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  @Input() cars: ICar[];


}
