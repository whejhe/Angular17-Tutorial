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
      url: 'https://www.youtube.com/embed/7iobxzd_2wY?list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29',
      title: 'Curso React desde cero 2024',
      topics: ['React','Framework']
    },
    {
      id: 'angular-course1',
      url: 'https://www.youtube.com/embed/f7unUpshmpA',
      title: 'Curso ANGULAR 17 desde cero',
      topics: ['Angular', 'Framework']
    }
  ]


  getVideos(): Video[] {
    return this.videos;
  }

  getVideo(id: string): Video | undefined {
    return this.videos.find(video => video.id === id);
  }

}
