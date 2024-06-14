//src/services/video.service
import { Injectable } from '@angular/core';
import { url } from 'inspector';

interface Video{
  id:string;
  url:string;
  title:string;
  topics:string[];
}

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private videos: Video[] = [
    {
      id: 'react-course1',
      url: 'https://www.youtube.com/embed/7iobxzd_2wY?list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29' || 'assets/images/fueraServicio.png',
      title: 'Curso React desde cero 2024',
      topics: ['React','Framework'],
    },
    {
      id: 'angular-course1',
      url: 'https://www.youtube.com/embed/f7unUpshmpA' || 'assets/images/fueraServicio.png',
      title: 'Curso ANGULAR 17 desde cero',
      topics: ['Angular', 'Framework'],
    },
    {
      id: 'angular-17-estructura',
      url: 'https://www.youtube.com/embed/kLUdumt8lNY' || 'assets/images/fueraServicio.png',
      title: 'Estructura para proyectos Angular 17',
      topics: ['Angular'],
    },
    {
      id: '',
      url: '' || 'assets/images/fueraServicio.png',
      title: '',
      topics: [],
    }

  ]


  getVideos(): Video[] {
    return this.videos;
  }

  getVideo(id: string): Video | undefined {
    return this.videos.find(video => video.id === id);
  }

}
