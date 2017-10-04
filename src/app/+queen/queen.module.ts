import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueenComponent } from './queen.component';
import { MaterialModule } from '../material.module';
import { QueenRoutingModule } from './queen.routing';

@NgModule({
  imports: [
    CommonModule,
    QueenRoutingModule,
    MaterialModule
  ],
  declarations: [QueenComponent]
})
export class QueenModule { }
