//src/app/components/elements/list-card/list-card.component
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ListaService } from '../../../services/lista.service';

@Component({
  selector: 'app-list-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.css'
})
export class ListCardComponent implements OnInit {

  constructor(
    private listaSvc:ListaService
  ) { }

  @Input() items:any[] = [];

  list:any[] = [];

  ngOnInit(): void {
    this.list = this.listaSvc.list;
  }

}
