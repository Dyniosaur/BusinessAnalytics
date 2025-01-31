import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Legend, Title, Tooltip, Colors } from "chart.js";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
    Title,
    Tooltip
);



const LineGraph = ({ data }) => {

    const chartData = {
      labels: data.labels,
      datasets: [
        {
          label: 'Sales Q1',
          data: data.values,
          borderColor: 'rgb(42, 199, 95)',
          borderWidth: 1,
          fill: false,
          tension: 0.4,
        },
      ],
    };

    const options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          grid : {
            color: 'rgb(255, 255, 255)',
          }
        },
        x: {
            grid : {
            color: 'rgb(255, 255, 255)',
            }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        tooltip: {
          enabled: true,
        },
      },
    };

    return (
      <div>
        <h2>Line Chart</h2>
        <Line data={chartData} options={options} />
      </div>
    );
};

export default LineGraph;