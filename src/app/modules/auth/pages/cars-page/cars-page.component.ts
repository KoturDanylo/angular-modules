import {Component, OnInit} from '@angular/core';
import {ICar} from "../../../../interfaces";
import {CarService} from "../../../../services";
import {ActivatedRoute, Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrl: './cars-page.component.css'
})
export class CarsPageComponent implements OnInit {
  cars: ICar[]
  length: number;
  pageIndex: number;

  pageSize = 10

  constructor(private carService: CarService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.carService.getTrigger().subscribe(() => {
      this.activatedRoute.queryParams.subscribe(({page}) => {
        this.carService.getAll(page).subscribe(value => {
          this.length = value.total_items
          this.cars = value.items
        })
      })
      this.router.navigate([], {queryParams: {page: 1}})
    })
  }

  handlePageEvent(event: PageEvent) {
    this.router.navigate([], {queryParams: {page: event.pageIndex + 1}})

  }
}
