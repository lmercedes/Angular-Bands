import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  private lista = ['Foo','Bar','The Rolling Stones', 'The Beatles', 'Queens'];

  

  ngOnInit() {
    
  }

}
