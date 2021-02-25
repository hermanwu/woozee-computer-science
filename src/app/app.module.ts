import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WoozeeLibModule } from 'woozee-lib';
import { ApiDesignComponent } from './api-design/api-design.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BehaviorsComponent } from './behaviors/behaviors.component';
import { CompanyInfoComponent } from './company/company-info/company-info.component';
import { DataStructureComponent } from './data-structure/data-structure.component';
import { FrontEndComponent } from './front-end/front-end.component';
import { AppMaterialModule } from './shared/app-material.module';
import { ResumeTipsComponent } from './resume-tips/resume-tips.component';
import { AlgorithmComponent } from './algorithm/algorithm.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyInfoComponent,
    BehaviorsComponent,
    ApiDesignComponent,
    DataStructureComponent,
    FrontEndComponent,
    ResumeTipsComponent,
    AlgorithmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    WoozeeLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
