import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuiaServiceService {

constructor() { }

  list = [
    {
      name:'Ionic docs',
      topic: ["ionic", "framework"],
      url: 'https://ionicframework.com/docs',
      description: 'Documentacion oficial de Ionic'
    },
    {
      name:'Angular docs',
      topic: ["angular", "framework"],
      url: 'https://angular.dev/',
      description: 'Documentacion oficial de Angular'
    },
    {
      name:'Vue docs',
      topic: ["vue","framework"],
      url: 'https://vuejs.org/',
      description: 'Documentacion oficial de Vue'
    },
    {
      name:'React docs',
      topic: ["react","framework"],
      url: 'https://es.react.dev/',
      description: 'Documentacion oficial de React'
    },
    {
      name:'',
      topic: [],
      url: '',
      description: ''
    },
    {
      name:'',
      topic: [],
      url: '',
      description: ''
    },
    {
      name:'',
      topic: [],
      url: '',
      description: ''
    },
    {
      name:'',
      topic: [],
      url: '',
      description: ''
    },
  ]

}
