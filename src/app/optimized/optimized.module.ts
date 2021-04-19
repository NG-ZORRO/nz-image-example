import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptimizedRoutingModule } from './optimized-routing.module';
import { OptimizedComponent } from './optimized.component';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import {NzImageModule} from 'ng-zorro-antd/experimental/image';


@NgModule({
  declarations: [OptimizedComponent],
  imports: [
    CommonModule,
    OptimizedRoutingModule,
    NzTypographyModule,
    NzImageModule
  ]
})
export class OptimizedModule { }
