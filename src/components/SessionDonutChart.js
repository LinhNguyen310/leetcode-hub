import React, { useEffect, useRef } from "react";
import ApexCharts from 'apexcharts';

const SessionDonutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const getChartOptions = () => {
      return {
        series: [35.1, 23.5, 2.4],
        colors: ["#799C2B", "#F78320", "#D00300"],
        chart: {
          height: 250,
          width: "60%",
          type: "donut",
        },
        stroke: {
          colors: ["transparent"],
          lineCap: "",
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  show: true,
                  fontFamily: "Inter, sans-serif",
                  offsetY: 20,
                },
                total: {
                  showAlways: true,
                  show: true,
                  label: "Problems",
                  fontFamily: "Inter, sans-serif",
                  formatter: function (w) {
                      console.log(w);
                      if (w.seriesName === "Problems") { // Check if the seriesName is "Problems"
                          return "0"; // Return 0 if hovering over the "Problems" label
                      } else {
                          const sum = w.globals.seriesTotals.reduce((a, b) => {
                              return a + b;
                          }, 0);
                          return sum;
                      }
                  },
              },
              
                value: {
                  show: true,
                  fontFamily: "Inter, sans-serif",
                  offsetY: -20,
                  formatter: function (value) {
                    return value + "k";
                  },
                },
              },
              size: "80%",
            },
          },
        },
        grid: {
          padding: {
            top: -2,
          },
        },
        labels: ["Easy", "Medium", "Hard"],
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: "bottom",
          fontFamily: "Inter, sans-serif",
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return value + "k";
            },
          },
        },
        xaxis: {
          labels: {
            formatter: function (value) {
              return value + "k";
            },
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
      };
    };

    if (document.getElementById("donut-chart") && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(document.getElementById("donut-chart"), getChartOptions());
      chartRef.current = chart;
      chart.render();

      // Get the label elements
      const labels = document.querySelectorAll('.apexcharts-datalabels text');

      // Function to handle mouse hover on label
      function handleLabelHover(event) {
        if (event.target.textContent === "Problems") {
          chartRef.current.updateSeries([35.1, 0, 2.4]); // Update the series when hovering over "Problems" label
        }
      }

      // Attach event listener to each label
      labels.forEach(label => {
        label.addEventListener('mouseenter', handleLabelHover);
      });
    }
  }, []);

  return (
    <div>
      <div className="py-6" id="donut-chart"></div>
    </div>
  );
};

export default SessionDonutChart;
