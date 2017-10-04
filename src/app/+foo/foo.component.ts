import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';


@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

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
