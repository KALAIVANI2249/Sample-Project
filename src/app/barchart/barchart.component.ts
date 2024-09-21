import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  barchart = new Chart({
    chart: {
      type: 'column' 
    },
    title: {
      text: 'Assessment Progress  <span style="color: #aacd74; margin-left:30px">■</span> Completed <span style="color: #c9c4c4;">■</span> Pending', // HTML for colored squares
      useHTML: true 
    },
    xAxis: {
      categories: ['Assignment', 'Quiz', 'Presentation', 'Lab'] 
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: ''
      },
      labels: {
        formatter: function () {
          return this.value + '%';
        }
      }
    },
    series: [
      {
        name: 'Completed',
        type: 'column',
        data: [30, 90, 65, 80], 
        color: '#aacd74'
      },
      {
        name: 'Completed',
        type: 'column',
        data: [72, 35, 35, 47], 
        color: '#aacd74'
      },
      {
        name: 'Completed',
        type: 'column',
        data: [50, 72, 20, ''], 
        color: '#aacd74'
      },
      {
        name: 'Completed',
        type: 'column',
        data: ['',25, '', ''], 
        color: '#aacd74'
      },
      {
        name: 'Completed',
        type: 'column',
        data: ['',50, '', ''], 
        color: '#aacd74'
      },
      {
        name: 'Pending',
        type: 'column',
        data: [100, 100, '', ''], // Update Pending data for Quiz to 30
        color: '#c9c4c4'
      }
      ,
      {
        name: 'Pending',
        type: 'column',
        data: ['', 100, '', ''], // Update Pending data for Quiz to 30
        color: '#c9c4c4'
      }
      ,
      {
        name: 'Pending',
        type: 'column',
        data: ['',100, '', ''], // Update Pending data for Quiz to 30
        color: '#c9c4c4'
      }
    ]
  });
  
  onstructor() { }

  ngOnInit(): void {
  }

}
