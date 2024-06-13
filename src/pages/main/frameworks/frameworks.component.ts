//src/pages/main/frameworks/frameworks.component
import { Component } from '@angular/core';
import { YoutubeCardComponent } from "../../../components/elements/youtube-card/youtube-card.component";
import { VideoService } from '../../../services/video.service';

@Component({
    selector: 'app-frameworks',
    standalone: true,
    templateUrl: './frameworks.component.html',
    styleUrl: './frameworks.component.css',
    imports: [YoutubeCardComponent]
})
export class FrameworksComponent {

  constructor(
    private videoSvc: VideoService
  ) {}

  selectedVideoUrl: string = '';

  selectVideo(id:string):void{
    this.selectedVideoUrl = this.videoSvc.getVideoUrl(id);
  }

}
