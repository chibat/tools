import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top/top.component'
import { TextConverterComponent } from './text-converter/text-converter.component'

const routes: Routes = [
  {path: 'text-converter', component: TextConverterComponent},
  {path: '', component: TopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
