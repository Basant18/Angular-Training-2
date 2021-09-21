import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketballComponent } from 'src/app/components/third/basketball/basketball.component';
import { CricketComponent } from 'src/app/components/third/cricket/cricket.component';
import { ThirdComponent } from 'src/app/components/third/third.component';

const routes: Routes = [
  { path:'', 
    component: ThirdComponent,
    children:[
      {path:'cricket',component: CricketComponent},
      {path:'basketball',component: BasketballComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtheleteRoutingModule { }
