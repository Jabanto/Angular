import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-adncontent-chart',
  templateUrl: './adncontent-chart.component.html',
  styleUrls: ['./adncontent-chart.component.css']
})
export class ADNcontentChartComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

    var myChart = new Chart("dnaContentChart", {
			type: 'line',
			data: {
				labels: ['0', '0.5', '1','1.5', '2', '2.5', '3'],
				datasets: [{
					label: 'Amount of Cells',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
					data: [

						0,
						1,
						12,
						1,
						4,
						0,
						0
					],
					fill: true,
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Line Filled Chart'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Relative amount of DNA per cell'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Number of Cells (arbitrary units)'
						}
					}]
				}
			}
    });

    // Trizol Use Charts
    var myChartTrizol01 = new Chart("useTrizolChart", {
      type: 'line',
      data: {
        labels: [1990,1995,2000,2005,2010,2015,2019],
        datasets: [{
            data: [1000,1000,10000,50000,100000,135000,161173],
            label: "TRIzol Reagent use",
            borderColor: "#3e95cd",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'TRIzol Reagent is the most cited organic reagent for nucleic acid isolation'
        }
      }
    });

    // Trizol Use Charts
    var myChartTrizol02 = new Chart("useTrizolKitChart", {
      type: 'line',
      data: {
        labels: [1,5,10,50,100,120,1000],
        datasets: [{
            data: [15,50,100,500,1000,1050],
            label: "TRIzol Plus RNA Purification Kit",
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
            lineTension: 0,
            elements: {
              point : {
                pointStyle: 'circle',
                hoverRadius: 15,
              }
            }
          },{
          data: [5,35,85,280,230,235],
          label: "Supplier D",
          borderColor: 'rgb(201, 203, 207)',
          fill: false
        }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'TRIzol Reagent is the most cited organic reagent for nucleic acid isolation'
        },
        elements: {

            point : {
              pointStyle: 'rect',
              radius:10,
              hoverRadius: 15
            }
        }

      }
    });

    // TRIzol Reagent and Phasemake Tubes Chart

    var myChartTrizol03 = new Chart("trizolTubeChart", {
      type: 'bar',
      data: {
        labels: ["TRIzol Reagent", "Trizol Reagent and PhaseMaker Tub Lot 1", "TRIzol Reagent and Phsemaker Tubes Lot 2"],
        datasets: [
          {
            label: "Yield and purity by absorbance 2x yiedls",
            backgroundColor: "#8e5ea2",
            data: [590,1220,1250]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'TRIzol Reagent and Phasemake Tubes Chart'
        }
      }
  });

  }

  randomScalingFactor = function() {
    //return Math.round(Samples.utils.rand(-100, 100));
  };


}
