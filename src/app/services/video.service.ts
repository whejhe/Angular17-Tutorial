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
      id: 'angular-17-defer',
      url: 'https://www.youtube.com/embed/kugUaUxk5TU' || 'assets/images/fueraServicio.png',
      title: 'Mejora la velocidad en Angular 17 con Defer',
      topics: ['angular', 'defer'],
    },
    {
      id: 'react-course1',
      url: 'https://www.youtube.com/embed/7iobxzd_2wY?list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29' || 'assets/images/fueraServicio.png',
      title: 'Curso React desde cero 2024',
      topics: ['React','Framework'],
    },
    {
      id: 'Firestore',
      url: 'https://www.youtube.com/embed/t_YSrxj0wGY?list=PLTg7E2ObeSjYfoEUh9YOgqXMWT51R1VVN' || 'assets/images/fueraServicio.png',
      title: 'CRUD con Angular y Firebase (Firestore) paso a paso',
      topics: ['Firebase', 'Angular', 'Firestore'],
    },
    {
      id: '',
      url: '' || 'assets/images/fueraServicio.png',
      title: '',
      topics: [],
    },
    {
      id: 'course-git-github',
      url: 'https://www.youtube.com/embed/niPExbK8lSw' || 'assets/images/fueraServicio.png',
      title: 'Curso de GIT y GITHUB DESDE CERO',
      topics: ['git', 'github'],
    }

  ]


  getVideos(): Video[] {
    return this.videos;
  }

  getVideo(id: string): Video | undefined {
    return this.videos.find(video => video.id === id);
  }

}
