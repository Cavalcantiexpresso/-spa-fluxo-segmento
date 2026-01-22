import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';



export interface Situacao {
  label: string;
  value: string;
}



@Component({
  selector: 'app-segmento',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './segmento.component.html',
  styleUrls: ['./segmento.component.scss']
})
export class SegmentoComponent {

  situacoes: Situacao[] = [
    { label: 'Ativo', value: 'ATIVO' },
    { label: 'Inativo', value: 'INATIVO' },
    { label: 'Desconhecido', value: 'DESCONHECIDO' }
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
    { nome: 'AçaiPay Leasing', codigo: 2, usuario: 'Sistema' },
    { nome: 'AçaiPay DTVM Investidores', codigo: 4, usuario: 'Sistema' },
    { nome: 'AçaiPay Consórcios', codigo: 5, usuario: 'Sistema' },
    { nome: 'AçaiPay Corretora de Seguros e ADM', codigo: 6, usuario: 'Sistema' },
    { nome: 'AçaiPay Seguros S.A.', codigo: 7, usuario: 'Sistema' }
  ];

}
