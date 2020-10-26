import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RowTableRoutingModule } from './row-table-routing.module';
import { RowTableComponent } from './row-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RowTableComponent],
  imports: [CommonModule, RowTableRoutingModule, FormsModule],
  exports: [RowTableComponent], //// faltava exportar !
})
export class RowTableModule {}
