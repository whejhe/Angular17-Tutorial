//src/components/elements/youtube-card/youtube-card.component
import { Component, Input } from '@angular/core';
import { VideoService } from '../../../services/video.service';
import { SafeUrlPipe } from "../../../pipes/safe-url.pipe";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-youtube-card',
    standalone: true,
    templateUrl: './youtube-card.component.html',
    styleUrl: './youtube-card.component.css',
    imports: [
      SafeUrlPipe,
      CommonModule
    ]
})
export class YoutubeCardComponent {

  @Input() videoId: string = '';
  @Input() videoUrl: string = '';
  @Input() title: string = '';
  @Input() topics: string[] = [];
  @Input() icons: string[] = [];

  constructor(private videoSvc: VideoService) { }

  // icons = [
  //   { id: 1, name: 'angular', url: 'assets/icons/angular-icon.png'},
  // ]

}
