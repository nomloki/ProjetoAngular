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
  operacao: any = 0;
  adicionar(num:string) {
    (this.operacao == 0)?(
        this.operacao = '',
        this.operacao += num
        ):(this.operacao += num);
        }
  limparTela() {
    this.resultado = 0;
    this.operacao = 0;
  }
  resultadoOperacao() {
      this.resultado = (eval(this.operacao.toString()));
      this.operacao = this.resultado;
  }
  inverterValor(){
    this.resultado = this.resultado * (-1);
  }
  backspace(){
    this.operacao = this.operacao.slice(0, -1);
  }
}