import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'optimized',
    loadChildren: () => import('./optimized/optimized.module').then(m => m.OptimizedModule)
  },
  {
    path: 'unoptimized',
    loadChildren: () => import('./unoptimized/unoptimized.module').then(m => m.UnoptimizedModule)
  },
  { path: '**', redirectTo: 'optimized', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
