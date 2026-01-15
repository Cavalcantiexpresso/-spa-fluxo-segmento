import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

interface City {
    name: string;
    code: string;
}





@Component({
  selector: 'app-segmento',
  standalone: true,
  imports: [FormsModule, Select],
  templateUrl: './segmento.component.html',
  styleUrl: './segmento.component.scss'
})
export class SegmentoComponent implements OnInit {
cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}
