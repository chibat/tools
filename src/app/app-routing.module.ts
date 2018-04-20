import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CsvFormatComponent } from './csv-format/csv-format.component'
import { TopComponent } from './top/top.component'

const routes: Routes = [
  {path: 'csv-format', component: CsvFormatComponent},
  {path: '', component: TopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
