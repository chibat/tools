import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CsvFormatComponent } from './csv-format/csv-format.component'

const routes: Routes = [
  {path: 'csv-format', component: CsvFormatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
