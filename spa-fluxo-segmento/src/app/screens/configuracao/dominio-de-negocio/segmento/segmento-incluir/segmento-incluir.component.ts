import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-segmento-incluir',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule],
  templateUrl: './segmento-incluir.component.html',
  styleUrls: ['./segmento-incluir.component.scss']
})
export class SegmentoIncluirComponent {
  nome = '';
  codigo: number | null = null;
  usuarioResponsavel = '';

  constructor(private dialogRef: MatDialogRef<SegmentoIncluirComponent>) {}

  salvar() {
    // Retorna os dados ao fechar o dialog
    this.dialogRef.close({ nome: this.nome, codigo: this.codigo, usuarioResponsavel: this.usuarioResponsavel });
  }

  cancelar() {
    this.dialogRef.close();
  }
}
