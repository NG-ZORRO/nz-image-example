import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OptimizedComponent} from './optimized.component';

const routes: Routes = [{
  path: '',
  component: OptimizedComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptimizedRoutingModule { }
