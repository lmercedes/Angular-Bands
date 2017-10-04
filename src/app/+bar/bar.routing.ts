import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes, RouterModule } from '@angular/router';
import { BarComponent } from './bar.component';

const routes: Routes = [
  { path: '',  component: BarComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    
  ]
})
export class BarRoutingModule { }
