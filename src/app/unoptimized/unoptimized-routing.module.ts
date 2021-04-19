import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UnoptimizedComponent} from './unoptimized.component';

const routes: Routes = [
  {
    path: '',
    component: UnoptimizedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnoptimizedRoutingModule { }
