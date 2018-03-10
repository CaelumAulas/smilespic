import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from "../servicos/foto.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MensagemComponent } from '../mensagem/mensagem.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styles: []
})
export class CadastroComponent implements OnInit {

    foto = new FotoComponent()
    mensagem = new MensagemComponent()
    formCadastro: FormGroup

    constructor(private servico: FotoService
                , private rota: ActivatedRoute
                , private roteador: Router
                , private formBuilder: FormBuilder){

        this.formCadastro = formBuilder.group({
            titulo: ['isso é o valor padrao do campo :)', Validators.compose(
                [
                    Validators.required,
                    Validators.minLength(5)
                ]
            )],
            url: ['', Validators.required],
            descricao: ''    
        })

    }

    ngOnInit() {

        this.rota.params.subscribe(parametrosRota => {

            if(parametrosRota.idFoto){
               
                this.servico.pesquisar(parametrosRota.idFoto)
                    .subscribe(
                        fotoDaApi => {
                            this.foto = fotoDaApi
                        }
                    )

            }

        })
    }

    salvar() {

        if (this.foto._id) {
            this.servico
                .atualizar(this.foto)
                .subscribe(
                    mensagemServico => {

                        this.mensagem.texto = mensagemServico.texto
                        this.mensagem.tipo = mensagemServico.tipo

                        setTimeout(
                            () => this.roteador.navigate([''])
                            , 3000
                        )      
                    }
                )
        }
        else {
            this.servico
                .cadastrar(this.foto)
                .subscribe(
                    mensagemServico => {
                        this.mensagem.texto = mensagemServico.texto
                        this.mensagem.tipo = mensagemServico.tipo
                        
                        this.foto = new FotoComponent()
                        setTimeout(
                            () => this.mensagem = new MensagemComponent()
                            , 3000
                        )
                    }
                )
        }
    }
}