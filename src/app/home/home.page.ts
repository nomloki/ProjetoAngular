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
  // declarando da variável 'resultado' que pode ser qualquer valor e recebe 0
  resultado:any = 0;
  // declaração da variável 'operação' que pode ser qualquer valor e recebe ''
  operacao:any = '';
  // declaração de uma lista que contém +, /, * e %
  operadores:string[] = ['+', '/', '*', '%'];

  // função para adicionar valores, tendo como parametro o 'num' que é uma string
  adicionar(num:string) {
    // // TODO: validação->{
    //     verificar se começa com um operador lógico |SE SIM =>  não deixa ser colocado | SE NAO => se for o ( - ) não deixar que seja colocado novamente
    // }
    this.operacao.toString().includes(this.operadores) ? (
      this.operacao == '-' ? (
        this.operacao += num,
        this.backspace()
      ) : (null)
    ) : (
      // a variável operação vai receber ela mesma mais o valor do 'num'
      this.operacao += num,
      // e vai chamar a função 'resultadoOperação()'
      this.resultadoOperacao()
    );
  }

  // função para limpar a tela
  limparTela() {
    // faz a variável 'resultado' receber 0
    this.resultado = 0;
    // faz a variável operação' receber ''
    this.operacao = '';
  }

  porcentagem(){
    // para a função de porcentagem temos que pensar da seguinte forma:
    // primeiro temos que criar um array com 'operacao', do qual separa cada indice por (+, -, * e /).
    // quando o botão é clicado, nossa variavel de 'porcentagem' vai retroceder 1 indice deste array, pegar o valor desse indice e dividir por 100.
    // a seguir, outra variavel vai percorrer o array e pegar o valor do qual foi aplicado a % e multiplicá-lo pelo valor da variável porcentagem.
    // ex:  ResPorcentagem = (valorInteiro/100) + valorPorcentagem;
  }

  // função para calcular a operação
  resultadoOperacao() {

    // a variável 'resultado' recebe a variável 'operação' que está sendo transformada em array e será calculada
    this.resultado = (eval(this.operacao.toString()));

    // se o valor da variável 'resultado' NÃO for finita (ou seja, número): a variável resultado recebe 'Syntax Error' e a variável 'operação' recebe ''. Se não, nada acontece
    !isFinite(this.resultado) ? (this.resultado = 'Syntax Error', this.operacao = '') : null;
  }

  // função para mostar o resultado do calculo
  resultadoCalc() {
    // a variável operação vai receber o valor da váriavel 'resultado'
    this.operacao = this.resultado;
  }

  // função de inverter o valor
  inverterValor() {
    // a variavel 'operação' e 'resultado' recebem elas mesmas multiplicadas por -1 respectivamente
    this.operacao = this.operacao * (-1);
    this.resultado = this.resultado * (-1);

    // se o valor da operação for NaN (Not a Number [Não é um número]) a variável 'resultado' vai receber 'Syntax Error' e a variável operação recebe ''. Se não, nada acontece
    isNaN(this.operacao) ? (this.resultado = "Syntax Error", this.operacao = '') : null;
    // chamando a função 'resultadoOperação'
    this.resultadoOperacao();
  }

  // função de deletar um caracter digitado
  backspace() {
    // variável 'operação' recebe ela mesma cortando o ultimo caracter
    this.operacao = this.operacao.slice(0, -1);
  }
}