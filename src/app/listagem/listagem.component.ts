import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styles: [`img { width: 200px }`]
})
export class ListagemComponent implements OnInit {
  titulo = 'Smiles'
  fotos

  constructor(conexaoApi: HttpClient) {

    conexaoApi.get('http://localhost:3000/v1/fotos')
      .subscribe(
        fotosApi => this.fotos = fotosApi
      )
  }

  ngOnInit() {
  }

}
