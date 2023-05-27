import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['janeiro',33],
    ['fevereiro',68],
    ['março',50],
    ['abril', 15]
  ]

  constructor() { }

  obterDados(): Observable<any>{
    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete();
    })
  } 
}
