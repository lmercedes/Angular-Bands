import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    
        title.setTitle('Angular Rocks');
    
        meta.addTags([
          { name: 'description', content: 'Esto es la descripción por defecto' },
          { name: 'keywords', content: 'Angular Rocks default'}
        ]);
    
      }

  ngOnInit() {
  }

}
