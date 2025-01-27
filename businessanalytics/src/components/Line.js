import {Line} from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Legend, Title, Tooltip } from "chart.js";
import { FetchedData } from "../FetchedData";
import { useEffect } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
    Title,
    Tooltip
);



export const LineGraph = () =>{

    useEffect( () => {
        FetchedData(), []}
    )

    const options={}

    const data={FetchedData}


    return <Line options={options} data={data}/>
}