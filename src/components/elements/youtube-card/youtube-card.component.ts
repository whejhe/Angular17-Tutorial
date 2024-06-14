//src/components/elements/youtube-card/youtube-card.component
import { Component, Input, OnInit } from '@angular/core';
import { VideoService } from '../../../services/video.service';
import { SafeUrlPipe } from "../../../pipes/safe-url.pipe";

@Component({
    selector: 'app-youtube-card',
    standalone: true,
    templateUrl: './youtube-card.component.html',
    styleUrl: './youtube-card.component.css',
    imports: [SafeUrlPipe]
})
export class YoutubeCardComponent implements OnInit {

  @Input()videoId: string = '';
  videoUrl: string = '';

  constructor(private videoSvc: VideoService) { }

  ngOnInit(): void {
    this.videoUrl = this.videoSvc.getVideoUrl(this.videoId);
  }
}
