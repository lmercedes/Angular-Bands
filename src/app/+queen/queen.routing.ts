import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes, RouterModule } from '@angular/router';
import { QueenComponent  } from './queen.component';

const routes: Routes = [
  { path: '',  component: QueenComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    
  ]
})
export class QueenRoutingModule { }
