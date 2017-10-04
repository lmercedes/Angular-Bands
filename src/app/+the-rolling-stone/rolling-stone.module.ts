import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RollingStoneComponent } from './rolling-stone.component';
import { RollingStoneRoutingModule } from './rolling-stone.routing'
@NgModule({
  imports: [
    CommonModule,
    RollingStoneRoutingModule
  ],
  declarations: [RollingStoneComponent]
})
export class RollingStoneModule { }
