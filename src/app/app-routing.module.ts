import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: 'home',  loadChildren: './+home/home.module#HomeModule' }, // Default route
    {path: 'foo',  loadChildren: './+foo/foo.module#FooModule'},
    {path: 'bar',  loadChildren: './+bar/bar.module#BarModule'},
    {path: 'the-rolling-stone', loadChildren:'./+the-rolling-stone/rolling-stone.module#RollingStoneModule'},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ 
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppRoutingModule { }
