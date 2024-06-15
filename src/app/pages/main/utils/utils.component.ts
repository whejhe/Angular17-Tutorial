// src/pages/main/utils/utils.component
import { Component, OnInit } from '@angular/core';
import { ListCardComponent } from "../../../components/elements/list-card/list-card.component";
import { ListaService } from '../../../services/lista.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-utils',
    standalone: true,
    templateUrl: './utils.component.html',
    styleUrl: './utils.component.css',
    imports: [
      ListCardComponent,
      CommonModule
    ]
})
export class UtilsComponent implements OnInit {

  list: any[] = [];
  topics: string[] = [
    'Diseño',
    'Tipografia',
    'Colores',
    'Imagenes',
    'Herramientas',
    'Testing',
    'Frameworks',
    'Trabajos Colaborativos'
  ];
  selectedTopic: string = '';

  constructor(private listaService: ListaService) { }

  ngOnInit(): void {
    this.list = this.listaService.list;
  }

}
