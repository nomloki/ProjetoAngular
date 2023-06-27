import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})

export class HomePage {
  resultado: any = 0;
  operacao: any = '';
  adicionar(num: string) {
      this.operacao += num;
    if (this.operacao == '*' || this.operacao == '/' || this.operacao == '%' || this.operacao == '+') {
      this.backspace();
    }
  }
  limparTela() {
    this.resultado = 0;
    this.operacao = '';
  }
  resultadoOperacao() {
    this.resultado = (eval(this.operacao.toString()));
    this.operacao = this.resultado;
    !isFinite(this.resultado) ? (this.resultado = 'Syntax Error', this.operacao = ''):null;
  }
  inverterValor() {
    this.operacao = this.operacao * (-1);
    this.resultado = this.resultado * (-1);
    isNaN(this.operacao) ? (this.resultado = "Syntax Error", this.operacao = ''):null;
    this.resultadoOperacao();
  }
  backspace() {
    this.operacao = this.operacao.slice(0, -1);
  }
}