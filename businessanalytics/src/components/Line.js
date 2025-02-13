import { Line} from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Legend, Title, Tooltip, } from "chart.js";



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
    Title,
    Tooltip,
);


const LineGraph = ({ data }) => {

    const chartData = {
      labels: data.labels,
      datasets: [
        {
          label: 'Sales Q1',
          data: data.values,
          borderColor: '#007ea7',
          borderWidth: 3,
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
        <Line data={chartData} options={options} />
      </div>
    );
};

export default LineGraph;