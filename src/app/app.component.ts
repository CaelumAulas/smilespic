import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    titulo = 'Smiles'  
    fotos: Object[] = []

    constructor(conexaoApi: HttpClient){
        
        conexaoApi.get<Object[]>('http://localhost:3000/v1/fotos')
                  .subscribe(
                        fotosApi => this.fotos = fotosApi
                        ,erro => console.log(erro)
                  )
    }

}