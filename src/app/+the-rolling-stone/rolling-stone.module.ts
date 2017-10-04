import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RollingStoneComponent } from './rolling-stone.component';
import { RollingStoneRoutingModule } from './rolling-stone.routing';
import { MaterialModule } from '../material.module'; 
@NgModule({
  imports: [
    CommonModule,
    RollingStoneRoutingModule,
    MaterialModule
  ],
  declarations: [RollingStoneComponent]
})
export class RollingStoneModule { }
