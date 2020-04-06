import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Produto } from './produto';
import { Observable } from 'rxjs';

@Injectable()
export class ProdutoService  {

    //Injeção de dependencia
    constructor(private http : HttpClient){}
    protected UrlService: string = "http://localhost:3000/";

    ObterProdutos() : Observable<Produto[]> {
        return this.http
        .get<Produto[]>(this.UrlService + "produtos");
    }
}
