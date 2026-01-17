import { CardModule } from 'primeng/card';
import { Component } from '@angular/core';





@Component({
  selector: 'app-segmento',
  standalone: true,
  imports: [CardModule],
  templateUrl: './segmento.component.html',
  styleUrl: './segmento.component.scss'
})
export class SegmentoComponent  {

  situacoes = [
    { label: 'Ativo', value: 'ATIVO' },
    { label: 'Inativo', value: 'INATIVO' }
  ];

  situacaoSelecionada = 'ATIVO';

  abas = [
    { label: 'Segmento' },
    { label: 'Conta' },
    { label: 'Item Caixa' },
    { label: 'Item Caixa x Item Sistema' },
    { label: 'Conta x Item Caixa' },
    { label: 'Grupo de Visão' },
    { label: 'Item Caixa x HST/SHST/Lote' },
    { label: 'Grupo de Item de Caixa' }
  ];

  segmentos = [
    { nome: 'BB Leasing', codigo: 2, usuario: 'Sistema' },
    { nome: 'BB DTVM Investidores', codigo: 4, usuario: 'Sistema' },
    { nome: 'BB Consórcios', codigo: 5, usuario: 'Sistema' },
    { nome: 'BB Corretora de Seguros e ADM', codigo: 6, usuario: 'Sistema' },
    { nome: 'BB Seguros S.A.', codigo: 7, usuario: 'Sistema' }
  ];


}
