import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SegmentoConfirmarExclusaoComponent } from './segmento-confirmar-exclusao/segmento-confirmar-exclusao.component';

const ELEMENT_DATA: Segmento[] = [
  { nome: 'AçaiPay Leasing', codigo: 2, usuario: 'Sistema' },
  { nome: 'AçaiPay DTVM Investidores', codigo: 4, usuario: 'Sistema' },
  { nome: 'AçaiPay Consórcios', codigo: 5, usuario: 'Sistema' },
  { nome: 'AçaiPay Corretora de Seguros e ADM', codigo: 6, usuario: 'Sistema' },
  { nome: 'AçaiPay Seguros S.A.', codigo: 7, usuario: 'Sistema' }
];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


export interface Situacao {
  label: string;
  value: string;
}

export interface Segmento {
  nome: string;
  codigo: number;
  usuario: string;
}



@Component({
  selector: 'app-segmento',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatSelectModule,
    MatTableModule, MatPaginatorModule, MatIconModule, MatButtonModule, MatDialogModule
  ],
  templateUrl: './segmento.component.html',
  styleUrls: ['./segmento.component.scss']
})
export class SegmentoComponent implements AfterViewInit {

  displayedColumns: string[] = ['nome', 'codigo', 'usuario', 'acoes'];

  dataSource = new MatTableDataSource<Segmento>(ELEMENT_DATA);



  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog) { }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  abrirIncluir() {
    // carregar o componente de forma dinâmica para evitar warnings do compilador
    import('./segmento-incluir/segmento-incluir.component').then(m => {
      const dialogRef = this.dialog.open(m.SegmentoIncluirComponent, {
        width: '420px'
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result && result.nome) {
          const novo: Segmento = {
            nome: result.nome,
            codigo: result.codigo ?? 0,
            usuario: result.usuarioResponsavel ?? 'Usuário'
          };
          // Insere no começo da lista para ficar visível
          this.dataSource.data = [novo, ...this.dataSource.data];
        }
      });
    });
  }

  excluirSegimento(codigo: number) {
    const dialogRef = this.dialog.open(SegmentoConfirmarExclusaoComponent, {
      width: '600px',
      data: { codigo },
    });

    dialogRef.afterClosed().subscribe(confirmado => {
      if (confirmado) {
        this.dataSource.data = this.dataSource.data.filter(seg => seg.codigo !== codigo);
      }
    });
  }


  situacoes: Situacao[] = [
    { label: 'Nenhum', value: ' ' },
    { label: 'Ativo', value: 'ATIVO' },
    { label: 'Inativo', value: 'INATIVO' },
    { label: 'Desconhecido', value: 'DESCONHECIDO' }
  ];
  situacaoSelecionada = 'ATIVO';




}




