import React from 'react';
import ReactApexChart from 'react-apexcharts';

const RadialBarChart =()=>{
   
    return (
      <div id="chart">
        <ReactApexChart
          options={{
            series: [45,10,29,12],
            chart: {
              height: 390,
              type: 'radialBar',
            },
            plotOptions: {
              radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                  margin: 5,
                  size: '30%',
                  background: 'transparent',
                  image: undefined,
                },
                dataLabels: {
                  name: {
                    show: false,
                  },
                  value: {
                    show: false,
                  },
                },
              },
            },
            colors: ['#f02881', '#007934', '#ff0000', '#12127d'],
            labels: ['Total No of Participant', 'Pass', 'Fail', 'Absentence'],
            legend: {
              show: true,
              floating: true,
              fontSize: '16px',
              fontWeight:'bold',
              position: 'left',
              offsetX: 10,
              offsetY: 15,
              labels: {
                useSeriesColors: true,
              },
              markers: {
                offsetX:-9,
                width: 20, // Increase the size of the legend pointer (color marker)
                height: 20,
              },
              formatter: function (seriesName, opts) {
                return seriesName + ': ' + opts.w.globals.series[opts.seriesIndex];
              },  
              custom: {
                items: labels => {
                  // Create a custom legend item structure with added padding between marker and text
                  return labels.map((label, i) => {
                    return<div class="legend-item" style="display: flex; align-items: center;"> +
                      <span class="legend-marker" style="width: 20px; height: 20px; background-color: ' + label.fillStyle + '"></span> +
                      <span class="legend-text" style="margin-left: 50px;"> + label.name + </span> +
                      </div>;
                  });
                }
              },
   
              width: 370,
              height: 225,
              
              toggleDataSeries:false,
            },
            responsive: [
              {
                breakpoint: 480,
                options: {
                  legend: {
                    show: true,
                  },
                },
              },
            ],  
          }}
          series={[45,10,29,12]}
          type="radialBar"
          height={500}
        />
      </div>
    );
}

export default RadialBarChart;
