import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component'
import { FotoModule } from './foto/foto.module'
import { PainelModule } from "./painel/painel.module";
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { roteamento } from "./app.routes";
import { FotoService } from "./servicos/foto.service";
import { MensagemComponent } from './mensagem/mensagem.component';
import { FiltroPorTitulo } from "./listagem/filtroPorTitulo.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent,
    MensagemComponent,
    FiltroPorTitulo
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FotoModule,
    PainelModule,
    roteamento
  ],
  providers: [ FotoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
