import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes, RouterModule } from '@angular/router';
import { BeatlesComponent  } from './beatles.component';

const routes: Routes = [
  { path: '',  component: BeatlesComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    
  ]
})
export class BeatlesRoutingModule { }
