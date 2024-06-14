//src/app/services/lista.service
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor() { }

  list = [
    // DISEÑO
    {
      name: 'Bootstrap',
      topic: 'Diseño',
      url: 'https://getbootstrap.com/',
      description: 'Bootstrap es un framework multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web.'
    },
    {
      name:'Storybook',
      topic: 'Diseño',
      url: 'https://storybook.js.org/',
      description: 'Storybook es una herramienta de desarrollo que permite a los desarrolladores crear y probar componentes de forma aislada. Esto significa que puedes construir y mostrar componentes sin necesidad de interactuar con el resto de la aplicación, lo que resulta en un proceso de desarrollo más rápido y eficiente.'
    },
    {
      name:'Chakra UI',
      topic: 'Diseño',
      url: 'https://v2.chakra-ui.com/',
      description: 'Chakra UI es una biblioteca de componentes de interfaz de usuario para React. js que está diseñada para la accesibilidad.'
    },
    {
      name:'Vanilla extract',
      topic: 'Diseño',
      url: 'https://vanilla-extract.style/',
      description: 'Estilos css en javascript'
    },
    {
      name:'Panda CSS',
      topic: 'Diseño',
      url: 'https://panda-css.com/',
      description: 'Panda CSS es una biblioteca de CSS para React. Con Panda CSS, puedes crear tus propios estilos CSS de forma sencilla y de forma eficiente.'
    },
    {
      name:'Tailwind CSS',
      topic: 'Diseño',
      url: 'https://tailwindcss.com/',
      description: 'Tailwind CSS es un framework CSS para React. Con Tailwind CSS, puedes crear tus propios estilos CSS de forma sencilla y de forma eficiente.'
    },
    {
      name:'Material UI',
      topic: 'Diseño',
      url: 'https://mui.com/',
      description: 'Material UI es una biblioteca de CSS para React. Con Material UI, puedes crear tus propios estilos CSS de forma sencilla y de forma eficiente.'
    },
    {
      name:'Ant Design',
      topic: 'Diseño',
      url: 'https://ant.design/',
      description: 'Ant Design es una biblioteca de componentes de interfaz de usuario para React. js que está diseñada para ser la base de tu proyecto.'
    },
    {
      name: 'ShadCn',
      topic: 'Diseño',
      url: 'https://ui.shadcn.com/',
      description: 'Shadcn/ui es una biblioteca de componentes UI originalmente diseñada para web, construida sobre Tailwind CSS y Radix UI.'
    },
    // HERRAMIENTAS
    {
      name: 'Scroll Driven Animations',
      topic: 'Herramientas',
      url: 'https://scroll-driven-animations.style/',
      description: 'Scroll Driven Animations es una biblioteca de animaciones para React. Con Scroll Driven Animations, puedes crear tus propios animaciones de forma sencilla y de forma eficiente.'
    },
    {
      name: 'Playwright',
      topic: 'Herramientas, Testing',
      url: 'https://playwright.dev/',
      description: 'Playwright es una biblioteca de automatización de código abierto para pruebas de navegadores y web scraping desarrollada por Microsoft y lanzada el 31 de enero de 2020, que desde entonces se ha vuelto popular entre programadores y desarrolladores web'
    },
    {
      name: 'Chromatic',
      topic: 'Herramientas, Testing',
      url: 'https://www.chromatic.com/',
      description: 'Chromatic es un complemento de Storybook para pruebas de regresión visual y revisión en la nube.'
    },
    // TIPOGRAFIA
    {
      name: 'Google Fonts',
      topic: 'Tipografia',
      url: 'https://fonts.google.com/',
      description: 'Google Fonts es una biblioteca de fuentes para React. Con Google Fonts, puedes crear tus propios fuentes de forma sencilla y de forma eficiente.'
    },
    {
      name: 'Font Squirrel',
      topic: 'Tipografia',
      url: 'http://www.fontsquirrel.com',
      description: 'Font Squirrel es una biblioteca de fuentes para React. Con Font Squirrel, puedes crear tus propios fuentes de forma sencilla y de forma eficiente.'
    },
    {
      name: 'Font Pair',
      topic: 'Tipografia',
      url: 'http://fontpair.co',
      description: 'Font Pair es una biblioteca de fuentes para React. Con Font Pair, puedes crear tus propios fuentes de forma sencilla y de forma eficiente.'
    },
    {
      name: 'Typogui',
      topic: 'Tipografia',
      url: 'http://www.typogui.de',
      description: 'Typogui es una biblioteca de fuentes para React. Con Typogui, puedes crear tus propios fuentes de forma sencilla y de forma eficiente.'
    },
    {
      name: '1001 Fonts',
      topic: 'Tipografia',
      url: 'https://www.1001fonts.com/',
      description: '1001 Fonts es una biblioteca de fuentes para React. Con 1001 Fonts, puedes crear tus propios fuentes de forma sencilla y de forma eficiente.'
    },
    // COLORES
    {
      name: 'Adobe Color',
      topic: 'Colores',
      url: 'https://color.adobe.com/es/',
      description: 'Adobe Color es una biblioteca de colores para React. Con Adobe Color, puedes crear tus propios colores de forma sencilla y de forma eficiente.'
    },
    {
      name: 'Paletton',
      topic: 'Colores',
      url: 'https://paletton.com/',
      description: 'Paletton es una biblioteca de colores para React. Con Paletton, puedes crear tus propios colores de forma sencilla y de forma eficiente.'
    },
    {
      name: 'uigradients',
      topic: 'Colores',
      url: 'https://uigradients.com/#Shifter',
      description: 'uigradients es una biblioteca de colores para React. Con uigradients, puedes crear tus propios colores de forma sencilla y de forma eficiente.'
    },
    {
      name: 'CSS Gradient',
      topic: 'Colores',
      url: 'https://cssgradient.io/',
      description: 'CSS Gradient es una biblioteca de colores para React. Con CSS Gradient, puedes crear tus propios colores de forma sencilla y de forma eficiente.'
    },
    // IMAGENES
    {
      name: 'Pexels',
      topic: 'Imagenes',
      url: 'https://www.pexels.com/es-es/',
      description: 'Se trata de una plataforma social en la que los propios fotógrafos suben sus fotos seleccionadas.'
    },
    {
      name: 'Pikwizard',
      topic: 'Imagenes',
      url: 'https://pikwizard.com/',
      description: 'Pikwizard es una biblioteca de imagenes para React. Con Pikwizard, puedes crear tus propios imagenes de forma sencilla y de forma eficiente.'
    },
    {
      name: 'Unsplash',
      topic: 'Imagenes',
      url: 'https://unsplash.com/',
      description: 'Unsplash es una biblioteca de imagenes para React. Con Unsplash, puedes crear tus propios imagenes de forma sencilla y de forma eficiente.'
    },
    {
      name: 'Foodies Feed',
      topic: 'Imagenes',
      url: 'https://www.foodiesfeed.com/',
      description: 'Foodies Feed es una biblioteca de imagenes para React. Con Foodies Feed, puedes crear tus propios imagenes de forma sencilla y de forma eficiente.'
    },
    // {
    //   name: '',
    //   topic: '',
    //   url: '',
    //   description: ''
    // },
  ]

}
