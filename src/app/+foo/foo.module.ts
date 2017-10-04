import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo.component';
import { FooRoutingModule } from './foo.routing';

@NgModule({
  imports: [
    CommonModule,
    FooRoutingModule
  ],
  declarations: [FooComponent]
})
export class FooModule { }
