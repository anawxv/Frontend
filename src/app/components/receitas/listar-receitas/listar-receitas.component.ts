import { IReceita } from './../../../model/IReceita.model';
import { ReceitasService } from './../../../services/receitas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-receitas',
  templateUrl: './listar-receitas.component.html',
  styleUrls: ['./listar-receitas.component.css'],
})
export class ListarReceitasComponent implements OnInit {
  listaReceitas: IReceita[] = [];

  constructor(private receitasService: ReceitasService) {}

  ngOnInit(): void {
    this.carregarReceitas();
  }

  carregarReceitas(): void {
    this.receitasService.buscarTodos().subscribe(retorno =>{
      this.listaReceitas = retorno;
    })
  }

}
