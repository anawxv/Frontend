import { Router } from '@angular/router';
import { ReceitasService } from './../../../services/receitas.service';
import { IReceita } from './../../../model/IReceita.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-receitas',
  templateUrl: './cadastrar-receitas.component.html',
  styleUrls: ['./cadastrar-receitas.component.css']
})
export class CadastrarReceitasComponent implements OnInit{
  receita: IReceita ={
    nome: '',
    precoReceita: 0
  };

  constructor(private receitasService: ReceitasService, private router: Router) {}

  ngOnInit(): void {}

  salvarReceita(): void {
      this.receitasService.cadastrar(this.receita).subscribe(retorno => {
        this.receita = retorno;
        this.receitasService.exibirMensagem(
          'Sistema',
          '$(this.receita.nome) foi cadastrado com sucesso. ID: $(this.receita.id)',
          'toast-success'
        );
        this.router.navigate(['/receitas']);
      });
  }


}
