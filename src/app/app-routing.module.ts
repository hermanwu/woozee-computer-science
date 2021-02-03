import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyInfoComponent } from './company/company-info/company-info.component';

const routes: Routes = [
  {
    path: 'companies',
    component: CompanyInfoComponent,
  },
  { path: '**', redirectTo: 'companies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
