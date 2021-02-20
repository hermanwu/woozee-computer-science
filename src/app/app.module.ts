import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WoozeeLibModule } from 'woozee-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BehaviorsComponent } from './behaviors/behaviors.component';
import { CompanyInfoComponent } from './company/company-info/company-info.component';
import { AppMaterialModule } from './shared/app-material.module';
import { ApiDesignComponent } from './api-design/api-design.component';

@NgModule({
  declarations: [AppComponent, CompanyInfoComponent, BehaviorsComponent, ApiDesignComponent],
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
