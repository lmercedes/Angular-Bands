import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { MaterialModule } from '../material.module';
import { Video } from '../entities/video';


@Component({
  selector: 'app-queen',
  templateUrl: './queen.component.html',
  styleUrls: ['./queen.component.css']
})
export class QueenComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, meta: Meta,title:Title) {
    title.setTitle('Queen');
    meta.addTags([
          { name: 'description', content: 'Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún es considerada activa.' },
          { name: 'keywords', content: 'Freddy Mercury Rock Britanico'}
        ]); 
  }
  
    private videoList: Video[] = [];
    private video: Video;
  
  
    ngOnInit() {
      this.setVideos();
    }
  
    setVideos(){
      this.video = new Video(1,'Queen - I Want to Break Free','f4Mc-NYPHaQ')
      this.videoList.push(this.video);
    }
  
    getEmbedURL(video) {
  
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video.getEmbed());
    }
  
  }