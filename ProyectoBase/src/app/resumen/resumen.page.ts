import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss']
})
export class ResumenPage implements AfterViewInit {
  @ViewChild('doughnutCanvas', { static: false })

  doughnutReference: ElementRef;

  private doughnutChart: Chart;

  ngAfterViewInit() {

    this.doughnutChart = new Chart(this.doughnutReference.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Deuda', 'Hogar', 'Alimento', 'Entretenimiento', 'Transporte',
          'Educacion', 'Regalos', 'Viajes', 'Ingresos', 'Ropa y Calazado'],

        datasets: [
          {
            label: '# de Porcentaje',
            data: [5, 10, 5, 5, 10, 15, 5, 5, 5, 20],

            backgroundColor: [

              "#FF3333",
              "#FFA533",
              "#FFF633",
              "#C7FF33",
              "#52FF33",
              "#33FFFF",
              "#33BEFF",
              "#4C33FF",
              "#F933FF",
              "#FF3377"
            ],

            hoverBackgroundColor: [
              "#FF3300",
              "#FFA500",
              "#FFF600",
              "#C7FF00",
              "#52FF00",
              "#33FFCC",
              "#33BECC",
              "#4C33CC",
              "#F933CC",
              "#FF3344"]
          }
        ]
      }
    });
  }
}