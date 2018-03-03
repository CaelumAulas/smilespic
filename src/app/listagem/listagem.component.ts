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

  constructor(private servico: FotoService) {
    servico.listar().subscribe(
                        fotosApi => this.fotos = fotosApi
                        ,erro => console.log(erro)
                    )
  }

  ngOnInit() {
  }

  apagar(foto: FotoComponent){
    
    this.servico
        .deletar(foto)
        .subscribe(
            () => {

              /*

              let novasFotos = this.fotos.filter(
                function(fotoFilter){
                  if (fotoFilter !== foto){
                      return fotoFilter
                  }
              })

              this.fotos = novasFotos      

              */

            this.fotos = this.fotos.filter( fotoFilter => fotoFilter !== foto)  

              console.log(
                `${foto.titulo} apagada com sucesso!`
              )
            }
            , erro => console.log(erro)
            
        )
    
  }

}
