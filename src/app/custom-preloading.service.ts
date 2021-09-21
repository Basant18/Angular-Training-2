import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingService implements PreloadingStrategy{

  constructor() { }
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if(route.path === 'activity')
    {
      console.log('route in customerpreloading >>>> ',route);
      return fn();
    }
    return of(null);
  }
}
