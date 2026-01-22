import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SegmentoComponent } from "./screens/configuracao/dominio-de-negocio/segmento/segmento.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SegmentoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'spa-fluxo-segmento';
}
