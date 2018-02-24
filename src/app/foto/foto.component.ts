import { Component, Input } from "@angular/core";

@Component({
    selector: 'foto',
    template: '<img src="{{url}}" [title]="titulo" [alt]="titulo" class="img-fluid d-block mx-auto">'
})
export class FotoComponent {
    @Input() url = ''
    @Input() titulo = ''
}