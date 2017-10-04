import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';

import { Video } from '../entities/video';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-beatles',
  templateUrl: './beatles.component.html',
  styleUrls: ['./beatles.component.css']
})
export class BeatlesComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, meta: Meta, title: Title) { 
    title.setTitle('The Beatles');
    meta.addTags([
          { name: 'description', content: 'The Beatles fue una banda de pop/rock inglesa activa durante la década de 1960, y reconocida como la más exitosa comercialmente y la más alabada por la crítica en la historia de la música popular.1​2​3​4​5​ Formada en Liverpool, estuvo constituida desde 1962 por John Lennon (guitarra rítmica, vocalista), Paul McCartney (bajo, vocalista), George Harrison (guitarra solista, vocalista) y Ringo Starr (batería, vocalista). Enraizada en el skiffle y el rock and roll de los años 1950, la banda trabajó más tarde con distintos géneros musicales, que iban desde las baladas pop hasta el rock psicodélico, incorporando a menudo elementos clásicos, entre otros, de forma innovadora en sus canciones. La naturaleza de su enorme popularidad, que había emergido primeramente con la moda de la «Beatlemanía», se transformó al tiempo que sus composiciones se volvieron más sofisticadas. Llegaron a ser percibidos como la encarnación de los ideales progresistas, extendiendo su influencia en las revoluciones sociales y culturales de la década de 1960.'},
          { name: 'keywords', content: 'inglaterra inglesa rock John Lennon rock and roll'}
        ]); 
  }
  
    private videoList: Video[] = [];
    private video: Video;
  
  
    ngOnInit() {
      this.setVideos();
    }
  
    setVideos(){
      this.video = new Video(1,'The Beatles - Let it Be','ih-8K1a_SsA')
      this.videoList.push(this.video);
    }
  
    getEmbedURL(video) {
  
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video.getEmbed());
    }
  
  }
