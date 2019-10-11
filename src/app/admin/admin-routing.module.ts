import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { TableSampleComponent } from './components/table-sample/table-sample.component';
import { DashboardSampleComponent } from './components/dashboard-sample/dashboard-sample.component';
import { ProductListComponent } from './components/product-list/product-list.component';


const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
      path: 'products/create',
      component: ProductFormComponent
      },
      {
        path: 'table',
        component: TableSampleComponent
      },
      {
        path: 'dashboard',
        component: DashboardSampleComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      }

  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
