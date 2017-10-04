import { Component, OnInit } from '@angular/core';
import { Video } from '../entities/video';
import { MaterialModule } from '../material.module';

import { DomSanitizer, Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rolling-stone',
  templateUrl: './rolling-stone.component.html',
  styleUrls: ['./rolling-stone.component.css']
})
export class RollingStoneComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, meta: Meta, title: Title) { 
    title.setTitle('The Rolling Stones');
    meta.addTags([
          { name: 'description', content: 'The Rolling Stones es una banda británica de rock originaria de Londres. La banda se fundó en abril de 19622​ por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Ian Stewart y Charlie Watts.2​ Brian Jones fue despedido en junio de 1969, falleciendo tres semanas después, siendo reemplazado por el guitarrista Mick Taylor, que dejaría el grupo en 1975 y sería a su vez reemplazado por Ron Wood. Con el retiro de Bill Wyman en 1993 se incluyó al bajista Darryl Jones que, aunque toca con la banda desde la grabación del álbum Voodoo Lounge en 1994, no es un miembro oficial.'},
          { name: 'keywords', content: 'británica rock londres'}
        ]); 
  }

  private videoList: Video[] = [];
  private video: Video;


  ngOnInit() {
    this.setVideos();
  }

  setVideos(){
    this.video = new Video(1,'The Rolling Stone - Start me up','Nqp2stVMVjM')
    this.videoList.push(this.video);
  }

  getEmbedURL(video) {

    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video.getEmbed());
  }

}