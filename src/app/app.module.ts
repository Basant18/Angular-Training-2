import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';
import { AtheleteModule } from './module/athelete/athelete.module';
import { BasketballComponent } from './components/third/basketball/basketball.component';
import { CustomPreloadingService } from './custom-preloading.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    RouteNotFoundComponent,
    BasketballComponent,
  ],
  imports: [
    BrowserModule,
    //AtheleteModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CustomPreloadingService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
