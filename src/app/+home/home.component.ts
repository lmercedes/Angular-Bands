import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(meta: Meta, title: Title) {
    
        title.setTitle('Angular Rocks');
    
        meta.addTags([
          { name: 'description', content: 'Esto es la descripción por defecto' },
          { name: 'keywords', content: 'Angular Rocks default'}
        ]);
    
      }

  private lista = ['Foo','Bar','The Rolling Stones', 'The Beatles', 'Queens'];

  

  ngOnInit() {
    
  }

}
