import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtheleteRoutingModule } from './athelete-routing.module';
import { ThirdComponent } from 'src/app/components/third/third.component';
import { CricketComponent } from 'src/app/components/third/cricket/cricket.component';


@NgModule({
  declarations: [
    ThirdComponent,
    CricketComponent,
  ],
  imports: [
    CommonModule,
    AtheleteRoutingModule
  ],
  exports:[
    AtheleteRoutingModule,
  ]
})
export class AtheleteModule { }
