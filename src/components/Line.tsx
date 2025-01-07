import React from 'react'
import { Line} from "react-chartjs-2"
import { useGetMonthlySaleQuery} from "../Slices/productSlice"
import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
const LineChart = () => {
    const { data: salesData , error, isLoading } = useGetMonthlySaleQuery();

const labels = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];


const chartData = {
    labels,
    datasets: [
        {
            label: 'Monthly Sales ($)',
            data: salesData,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,

            
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: { display: true },
        tooltip: { callbacks: { label: (context) => `$${context.raw}` } },
    },
};
  return (
    <div className=""><Line data={chartData} options={options}/></div>
  )
}

export default LineChart