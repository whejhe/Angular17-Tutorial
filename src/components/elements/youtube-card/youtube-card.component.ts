//src/components/elements/youtube-card/youtube-card.component
import { Component, Input } from '@angular/core';
import { VideoService } from '../../../services/video.service';
import { SafeUrlPipe } from "../../../pipes/safe-url.pipe";

@Component({
    selector: 'app-youtube-card',
    standalone: true,
    templateUrl: './youtube-card.component.html',
    styleUrl: './youtube-card.component.css',
    imports: [SafeUrlPipe]
})
export class YoutubeCardComponent {

  @Input() videoId: string = '';
  @Input() videoUrl: string = '';
  @Input() title: string = '';
  @Input() topics: string[] = [];

  constructor(private videoSvc: VideoService) { }

}
