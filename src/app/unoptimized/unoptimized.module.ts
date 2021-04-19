import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnoptimizedRoutingModule } from './unoptimized-routing.module';
import { UnoptimizedComponent } from './unoptimized.component';
import {NzTypographyModule} from 'ng-zorro-antd/typography';


@NgModule({
  declarations: [UnoptimizedComponent],
  imports: [
    CommonModule,
    UnoptimizedRoutingModule,
    NzTypographyModule
  ]
})
export class UnoptimizedModule { }
