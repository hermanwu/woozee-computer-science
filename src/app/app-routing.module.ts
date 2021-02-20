import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiDesignComponent } from './api-design/api-design.component';
import { BehaviorsComponent } from './behaviors/behaviors.component';
import { CompanyInfoComponent } from './company/company-info/company-info.component';

const routes: Routes = [
  {
    path: 'companies',
    component: CompanyInfoComponent,
  },
  {
    path: 'behavior',
    component: BehaviorsComponent,
  },
  {
    path: 'api-design',
    component: ApiDesignComponent,
  },
  { path: '**', redirectTo: 'behavior', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
