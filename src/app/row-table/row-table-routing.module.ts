import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RowTableComponent } from './row-table.component';

const routes: Routes = [{ path: '', component: RowTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RowTableRoutingModule {}
