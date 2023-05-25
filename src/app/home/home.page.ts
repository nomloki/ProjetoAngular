import { CommonModule} from '@angular/common'
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  calendario = {
    mes: 'Maio',
    ano: 2023,
    foto: 'https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.br:9ba7c88d-77f4-11ea-a59c-0a7527021758?quality=0.7&gen=ntrn&legacyStatusCode=true',
    dias_da_semana: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
    primeira_semana: [30, 1, 2, 3, 4, 5, 6],
    segunda_semana: [7, 8, 9, 10, 11, 12, 13],
    terceira_semana: [14, 15, 16, 17, 18, 19, 20],
    quarta_semana: [21, 22, 23, 24, 25, 26, 27],
    quinta_semana: [28, 29, 30, 31, 1, 2, 3],
  }
}
