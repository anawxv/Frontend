import { IReceita } from './../model/IReceita.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ReceitasService {
  private URL: string = 'http://localhost:3000/receitas';

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  buscarTodos(): Observable<IReceita[]>{
    return this.http.get<IReceita[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));

  }

  buscarPorId(id: number): Observable<IReceita>{
    return this.http.get<IReceita>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));

  }

  cadastrar(receita: IReceita): Observable<IReceita>{
    return this.http.post<IReceita>(this.URL, receita).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));

  }

  exibirErro(e: any):Observable<any> {
    this.exibirMensagem("Erro!!!", 'Não foi possivel realizar a operação', 'toast-error');
    return EMPTY;

  }
  exibirMensagem(titulo:string, mensagem: string, tipo: string):void{
    this.toastr.show(mensagem, titulo,{closeButton:true, progressBar:true}, tipo);
  }
}
