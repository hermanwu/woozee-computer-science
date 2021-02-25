import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgorithmComponent } from './algorithm/algorithm.component';
import { ApiDesignComponent } from './api-design/api-design.component';
import { BehaviorsComponent } from './behaviors/behaviors.component';
import { CompanyInfoComponent } from './company/company-info/company-info.component';
import { DataStructureComponent } from './data-structure/data-structure.component';
import { FrontEndComponent } from './front-end/front-end.component';
import { ResumeTipsComponent } from './resume-tips/resume-tips.component';

const routes: Routes = [
  {
    path: 'companies',
    component: CompanyInfoComponent,
  },
  {
    path: 'resume-tips',
    component: ResumeTipsComponent,
  },
  {
    path: 'behavior',
    component: BehaviorsComponent,
  },
  {
    path: 'api-design',
    component: ApiDesignComponent,
  },
  {
    path: 'data-structure',
    component: DataStructureComponent,
  },
  {
    path: 'algorithm',
    component: AlgorithmComponent,
  },
  {
    path: 'front-end',
    component: FrontEndComponent,
  },
  {
    path: 'resume-tips',
    component: ResumeTipsComponent,
  },
  { path: '**', redirectTo: 'behavior', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
