import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/layouts/nav/nav.component';
import {CloudinaryModule} from '@cloudinary/ng';
import {Cloudinary, CloudinaryImage} from '@cloudinary/url-gen';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        NavComponent,
        CloudinaryModule,
        CommonModule
    ]
})
export class AppComponent implements OnInit {

  img!: CloudinaryImage;

  // Create a Cloudinary instance and set your cloud name.
  cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  title = 'angular-18-tutorial';
  city = 'Sevilla';

  ngOnInit(): void {

  }
}
