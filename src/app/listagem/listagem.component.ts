import { Component, OnInit } from '@angular/core';
import { FotoService } from "../servicos/foto.service";
import { FotoComponent } from '../foto/foto.component';

@Component({
    selector: 'listagem',
    templateUrl: './listagem.component.html',
    styles: [`img { width: 200px }`]
})
export class ListagemComponent implements OnInit {
    titulo = 'Smiles'
    fotos: FotoComponent[] = []
    mensagem

    constructor(private servico: FotoService) {
        servico.listar().subscribe(
            fotosApi => this.fotos = fotosApi
            , erro => console.log(erro)
        )
    }

    ngOnInit() {}

    apagar(foto: FotoComponent) {

        this.servico
            .deletar(foto)
            .subscribe(
                () => {

                    this.fotos = this.fotos.filter(fotoFilter => fotoFilter !== foto)

                    this.mensagem = `${foto.titulo} apagada com sucesso!`

                    setTimeout(() => this.mensagem = '', 2000)

                }
                , erro => console.log(erro)

            )
    }
}