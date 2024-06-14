import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor() { }

  icons = [
    {name: 'angular', image: '/assets/icons/angular-icon.png', url: 'https://angular.dev/'},
    {name: 'react', image: '/assets/icons/react-icon.png', url: 'https://es.react.dev/'},
    {name: 'vue', image: '/assets/icons/vue-icon.png', url: 'https://vuejs.org/'},
    {name: 'ionic', image: '/assets/icons/ionic-icon.png', url: 'https://ionicframework.com/'},
    {name: 'github', image: '/assets/icons/github-icon.png', url: 'https://github.com/'},
    {name: 'docker', image: '/assets/icons/docker-icon.png', url: 'https://www.docker.com/'},

  ]
}
