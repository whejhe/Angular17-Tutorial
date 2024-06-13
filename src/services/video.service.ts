import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  getVideoUrl(id: string): string {
    switch (id){
      case 'react-course1':
        return 'https://youtu.be/7iobxzd_2wY?list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29';
      default:
        return '';
    }
  }


}
