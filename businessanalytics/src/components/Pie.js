import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Title, Tooltip, } from "chart.js";



ChartJS.register(
    ArcElement,
    Legend,
    Title,
    Tooltip,
);

const PieGraph = ({ data }) => {

    const chartData = {
      labels: data.labels,
      datasets: [
        {
          label: 'Sales Q1',
          data: data.values,
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
        <Pie data={chartData} options={options} />
      </div>
    );
};

export default PieGraph;