import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';
import { BarRoutingModule } from './bar.routing';

@NgModule({
  imports: [
    CommonModule,
    BarRoutingModule
  ],
  declarations: [BarComponent]
})
export class BarModule { }
