import { Component, inject } from '@angular/core';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose
} from '@angular/material/dialog';

@Component({
  selector: 'app-segmento-confirmar-exclusao',
  imports: [    
    MatDialogModule,   
    MatDialogContent,
    MatDialogActions,
   
],
  templateUrl: './segmento-confirmar-exclusao.component.html',
  styleUrl: './segmento-confirmar-exclusao.component.scss',
})
export class SegmentoConfirmarExclusaoComponent {

  dialogRef = inject(MatDialogRef<SegmentoConfirmarExclusaoComponent>);
  data = inject(MAT_DIALOG_DATA) as { codigo: number };



  confimar() {
    this.dialogRef.close(true);
  }

  voltar() {
    this.dialogRef.close(false);
  }

}
