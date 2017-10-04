import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes, RouterModule } from '@angular/router';
import { RollingStoneComponent } from './rolling-stone.component';

const routes: Routes = [
  { path: '',  component: RollingStoneComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    
  ]
})
export class RollingStoneRoutingModule { }
