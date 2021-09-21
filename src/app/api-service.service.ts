import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService implements Resolve<any>, CanActivate, CanActivateChild {

  constructor(private http: HttpClient) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let loggedIn = (this.randomNumber(1,10)%2 === 0);
    console.log('loggedIn',loggedIn);
    if(loggedIn)
    {
      return true;
    }
    return false;
  }

  randomNumber(min: number, max: number) { 
    return Math.floor(Math.random() * (max - min) + min);
   } 

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let loggedIn = (this.randomNumber(1,10)%2 === 0);
    console.log('loggedIn',loggedIn);
    if(loggedIn)
    {
      return true;
    }
    return false;
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //return of([1,2,3,4]);
    return this.http.get('https://picsum.photos/v2/list');
    //throw new Error('Method not implemented.');
  }
}
