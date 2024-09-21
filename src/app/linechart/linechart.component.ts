import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

lineChart = new Chart({ 
  chart: {
    type: 'line'
  },
  title: {
    text: 'Students Attendance'
  },
  credits: {
    enabled: false
  },
  xAxis: {
    categories: ['1/7', '8/7', '15/7','22/7','29/7','5/8','12/8','19/8','26/8','2/9','9/9','16/9','23/9','30/9','14/10'],  // Use your specific categories here
    title: {
      text: 'Weeks'
    }
  },
  yAxis: {
    min: 0,
    max: 100,  // Set the maximum value to 100 for percentage
    title: {
      text: 'Attendance'
    },
    labels: {
      formatter: function () {
        return this.value + '%';  // Append a percentage sign
      }
    }
  },
  series: [{
    name: 'Line 1',
    data: [25, 50,10,80,50,60,75,60,100,75,50,60,50],
    color: 'rgb(177 23 203)'
  }] as any
})
 
  constructor() { }

  ngOnInit(): void {
  }



}
