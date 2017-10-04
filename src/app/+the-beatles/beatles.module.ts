import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { BeatlesComponent } from './beatles.component';
import { BeatlesRoutingModule  } from './beatles.routing';

@NgModule({
  imports: [
    CommonModule,
    BeatlesRoutingModule,
    MaterialModule
  ],
  declarations: [BeatlesComponent]
})
export class BeatlesModule { }
