import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import {ExampleService} from './example-service.service'
import { ListExampleRoutingModule } from './list-example-routing.module';
import { ListExampleComponent } from './list-example.component';
import { FormsModule } from '@angular/forms';
import { RowTableModule } from '../row-table/row-table.module';

@NgModule({
  declarations: [ListExampleComponent],
  imports: [CommonModule, FormsModule, ListExampleRoutingModule, RowTableModule],
})
export class ListExampleModule {}
