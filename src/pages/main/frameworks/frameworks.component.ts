//src/pages/main/frameworks/frameworks.component
import { Component } from '@angular/core';
import { YoutubeCardComponent } from "../../../components/elements/youtube-card/youtube-card.component";
import { VideoService } from '../../../services/video.service';
import { SafeUrlPipe } from '../../../pipes/safe-url.pipe';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-frameworks',
    standalone: true,
    templateUrl: './frameworks.component.html',
    styleUrl: './frameworks.component.css',
    imports: [
      YoutubeCardComponent,
      SafeUrlPipe,
      CommonModule
    ]
})
export class FrameworksComponent {

  constructor(
    private videoSvc: VideoService
  ) {}

  // Añadir videos aqui
  // getVideoUrl(id: string): string {
  //   return this.videoSvc.getVideoUrl(id);
  // }

}
