import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {ICar, IPagination} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private triggerSubject = new BehaviorSubject<boolean>(null)
  private carForUpdateSubject = new BehaviorSubject<ICar>(null)

  constructor(private httpClient: HttpClient) {
  }

  getAll(page = 1): Observable<IPagination<ICar>> {
    return this.httpClient.get<IPagination<ICar>>(urls.cars.base, {params: {page}})
  }

  create(data: ICar): Observable<ICar> {
    return this.httpClient.post<ICar>(urls.cars.base, data).pipe(tap(() => {
      this.triggerSubject.next(!this.triggerSubject.value)
    }))
  }

  updateById(id: number, data: ICar): Observable<ICar> {
    return this.httpClient.put<ICar>(urls.cars.byId(id), data).pipe(tap(() => {
      this.carForUpdateSubject.next(null)
      this.triggerSubject.next(!this.triggerSubject.value)
    }))
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(urls.cars.byId(id)).pipe(tap(() => {
      this.triggerSubject.next(!this.triggerSubject.value)
    }))
  }

  getTrigger(): Observable<boolean> {
    return this.triggerSubject.asObservable()
  }

  getCarForUpdate(): Observable<ICar> {
    return this.carForUpdateSubject.asObservable()
  }

  setCarForUpdate(car: ICar): void {
    this.carForUpdateSubject.next(car)
  }

}
