import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {normalizeSrc, NzImageSrcLoader} from 'ng-zorro-antd/experimental/image';
import {NZ_CONFIG, NzConfig} from 'ng-zorro-antd/core/config';
import {isNil} from 'ng-zorro-antd/core/util';

registerLocaleData(en);

const cloudinaryLoader: NzImageSrcLoader = ({ src, width }) => {
  const params = isNil(width) ? '' : `,w_${width}`;
  return `https://res.cloudinary.com/hsuanlee/image/upload/c_fit,q_auto${params}/${normalizeSrc(src)}`;
};

const ngZorroConfig: NzConfig = {
  imageExperimental: {
    nzSrcLoader: cloudinaryLoader
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: NZ_CONFIG, useValue: ngZorroConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
