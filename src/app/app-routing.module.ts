import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' } ,// Default route
    { path: 'home',  loadChildren: './+home/home.module#HomeModule' }, 
    {path: 'foo',  loadChildren: './+foo/foo.module#FooModule'},
    {path: 'bar',  loadChildren: './+bar/bar.module#BarModule'},
    {path: 'the-rolling-stones', loadChildren:'./+the-rolling-stone/rolling-stone.module#RollingStoneModule'},
    {path: 'the-beatles', loadChildren:'./+the-beatles/beatles.module#BeatlesModule'},
    {path: 'queen', loadChildren:'./+queen/queen.module#QueenModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ 
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppRoutingModule { }
