import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
import { Observable } from "rxjs/Observable";
//import { map } from "rxjs/operators";
import 'rxjs/add/operator/map'

const url = 'http://localhost:3000/v1/fotos/'

const cabecalho = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

@Injectable()
export class FotoService {
    
    constructor(private conexaoApi: HttpClient){}

    listar(): Observable<FotoComponent[]> {
        return this.conexaoApi.get<FotoComponent[]>(url)
    }

    pesquisar(fotoId: string): Observable<FotoComponent> {
        return this.conexaoApi.get<FotoComponent>(url + fotoId)
    }

    cadastrar(foto: FotoComponent): Observable<MensagensServico> {
        return this.conexaoApi.post(url,foto,cabecalho)
                              .map( () => {
                                return new MensagensServico(`${foto.titulo} inserida com sucesso`, `success`)
                              })
    }

    deletar(foto: FotoComponent): Observable<MensagensServico> {
        return this.conexaoApi.delete(url+foto._id)
                                .map(() => {
                                    return new MensagensServico(`${foto.titulo} apagada com sucesso`, `success`)
                                })     
    }

    atualizar(foto: FotoComponent): Observable<MensagensServico> {
        return this.conexaoApi.put(url+foto._id, foto, cabecalho)
                                .map(() => {
                                    return new MensagensServico(`${foto.titulo} atualizada com sucesso`, `success`)
                                })
    }

}

class MensagensServico {

    constructor(private _texto: string, 
                private _tipo: string) {}

    get texto(): string {
        return this._texto
    }

    get tipo(): string {
        return this._tipo
    }
}