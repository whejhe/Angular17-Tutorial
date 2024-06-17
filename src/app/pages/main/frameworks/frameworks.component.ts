//src/pages/main/frameworks/frameworks.component
import { Component, OnInit } from '@angular/core';
import { YoutubeCardComponent } from "../../../components/elements/youtube-card/youtube-card.component";
import { VideoService } from '../../../services/video.service';
import { SafeUrlPipe } from '../../../pipes/safe-url.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideoFilterComponent } from '../../../components/elements/video-filter/video-filter.component';
import { IconService } from '../../../services/icon.service';

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
export class FrameworksComponent implements OnInit {

  list: any[] = [];
  topics = [
    'Angular',
    'React',
    'Vue',
    'Svelte',
    'Firebase',
    'Git',
    'GitHub',
  ];

  videos = this.videoSvc.getVideos();
  filteredVideos = this.videos;
  filterText = '';

  selectedTopic: string = '';
  filteredItems:any[] = [];

  constructor(
    private videoSvc: VideoService,
    private iconSvc: IconService
  ) {}

  public icons = this.iconSvc.icons;

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

  ngOnInit(): void {
    this.list = this.videoSvc.videos;
    this.filteredItems = this.list;
  }

  onSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedTopic = selectElement.value;
    this.filterItems();
  }

  filterItems() {
    if (this.selectedTopic) {
      this.filteredItems = this.list.filter(item => item.topic.includes(this.selectedTopic));
    } else {
      this.filteredItems = this.list; // Mostrar todos los elementos si no hay ningún tema seleccionado
    }
  }

}
