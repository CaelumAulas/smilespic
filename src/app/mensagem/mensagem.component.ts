import { Component, Input } from '@angular/core';

@Component({
  selector: 'mensagem',
  templateUrl: './mensagem.component.html',
  styles: []
})
export class MensagemComponent {

  @Input() texto = ''
  @Input() tipo = ''

}