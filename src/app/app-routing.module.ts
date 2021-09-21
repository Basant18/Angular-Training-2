import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ApiServiceService } from './api-service.service';
import { FirstComponent } from './components/first/first.component';
import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';
import { SecondComponent } from './components/second/second.component';
import { CustomPreloadingService } from './custom-preloading.service';

const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full', data:{name: 'first route'}},
  { path: 'first', component: FirstComponent, data:{name: 'first route'},resolve:{preloadData: ApiServiceService}},
  { path: 'second', component: SecondComponent, data:{name: 'second route'},},
  { path: 'second/:id', component: SecondComponent, data:{name: 'second route with ID'},},
  { path: 'athelete', canActivateChild: [ApiServiceService],loadChildren: () => import('./module/athelete/athelete.module').then(x => x.AtheleteModule)},
  { path: 'activity', canActivate: [ApiServiceService], loadChildren: () => import('./activity/activity.module').then(x => x.ActivityModule)},
  { path: '**', component: RouteNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
