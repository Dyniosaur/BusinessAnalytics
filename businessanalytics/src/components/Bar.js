import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Legend, Title, Tooltip, } from "chart.js";



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Legend,
    Title,
    Tooltip,
);

const BarGraph = ({ data }) => {

    const chartData = {
      labels: data.labels,
      datasets: [
        {
          label: 'Sales Q1',
          data: data.values,
          borderColor: '#007ea7',
          borderWidth: 3,
          fill: true,
          backgroundColor:['#007ea7','#76c893','#ffe45e','#dab6fc','#d8315b','#dae3e5'],
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
            color: 'white',
          }
        },
        x: {
            grid : {
            color: 'white',
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
        <h2>Sales per sizes</h2>
        <Bar data={chartData} options={options} />
      </div>
    );
};

export default BarGraph;