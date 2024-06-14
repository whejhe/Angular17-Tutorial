//src/pages/main/frameworks/frameworks.component
import { Component } from '@angular/core';
import { YoutubeCardComponent } from "../../../components/elements/youtube-card/youtube-card.component";
import { VideoService } from '../../../services/video.service';
import { SafeUrlPipe } from '../../../pipes/safe-url.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideoFilterComponent } from '../../../components/elements/video-filter/video-filter.component';

@Component({
    selector: 'app-frameworks',
    standalone: true,
    templateUrl: './frameworks.component.html',
    styleUrl: './frameworks.component.css',
    imports: [
      YoutubeCardComponent,
      SafeUrlPipe,
      CommonModule,
      FormsModule,
      VideoFilterComponent
    ]
})
export class FrameworksComponent {

  videos = this.videoSvc.getVideos();
  filteredVideos = this.videos;
  filterText = '';

  constructor(
    private videoSvc: VideoService
  ) {}

  onFilterChange(filterText: string) {
    this.filterText = filterText;
    this.filterVideos();
  }

  filterVideos() {
    this.filteredVideos = this.videos.filter(video =>
      video.title.toLowerCase().includes(this.filterText.toLowerCase()) ||
      video.topics.some(topic => topic.toLowerCase().includes(this.filterText.toLowerCase()))
    );
  }

}
