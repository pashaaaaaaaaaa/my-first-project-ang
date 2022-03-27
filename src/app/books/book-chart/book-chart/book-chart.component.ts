import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Chart } from 'chart.js'
import { ChartTransferService } from '../../chart.service';
@Component({
  selector: 'app-book-chart',
  templateUrl: './book-chart.component.html',
  styleUrls: ['./book-chart.component.css']
})

export class BookChartComponent implements OnInit {
  // chart:any;
  data = this.chartTransfer.getData();  
  constructor(private chartTransfer: ChartTransferService) { }

  ngOnInit(): void {
    const myChart = new Chart("myChart", {
      type: 'line',
      data: {
          labels: this.data?.map(e => e.title),
          datasets: [{
              label: 'Продажи',
              data: this.data?.map(e => e.qtyRelease),
              backgroundColor: '#007bff',
              borderWidth: 1,
              tension:0.2,
              borderColor: '#007bff'
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  // }
  // loadChart():void {
  //   new Chart(this.chart, {
  //     type: 'line',
  //     data: {
  //       labels: this.data?.map(e => e.title),
  //       datasets: [
  //         {
  //           data:[30,60,40,80,55,63,85,88,76,90],
  //           label:'version 1', 
  //           backgroundColor: '#007bff',
  //           tension:0.2,
  //           borderColor: '#007bff',
  //         }
  //       ], 
  //       labels:[
  //         '17th',
  //         '18th',
  //         '19th',
  //         '20th',
  //         '21th',
  //         '22th',
  //         '23th',
  //         '24th',
  //         '25th',
  //         '26th',
  //       ],
  //     },
  //     options: {
  //       responsive: true,
  //       maintainAspectRatio: false, 
  //       scales: {
  //         y: {
  //           beginAtZero:true,
  //         },
  //       },
  //     },
  //   });
  // }
      }
    }
