import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import '../css/PieChart.css'

export default function LineChart() {
    Chart.defaults.font.size = 18;
    const data = {
        // padding: 20,
        type: 'doughnut',
        labels: ["Food", "Toys", "Utilities"],
        datasets: [{
            rotation: 0,
            weigh: 100,
            borderColor: 'transparent',
            // backgroundColor: "#f7c443",
            label: 'Takes up',
            data: [300, 50, 100],
            backgroundColor: [
                '#8a92fc',
                '#2473fb',
                '#1dd298',
            ],
        }]
    };

    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    padding: 20,
                    color: '#818192',
                },
            },
            title: {
                display: false,
                text: "Total Gain",
                padding: 40,
                color: "#818192",
                font: {
                    size: 20
                }
            }
        },
        // scales: {
        //     y: {
        //         grid: {
        //             lineWidth: 2,
        //             color: "#27283a"
        //         },
        //         ticks: {
        //             padding: 20,
        //             color: "#818192",

        //         },
        //         suggestedMin: 0
        //     },
        //     x: {
        //         grid: {

        //             lineWidth: .1,
        //         },
        //         ticks: {
        //             color: "#818192",
        //             padding: 20,
        //         },
        //     }
        // },
    }


    return <Doughnut className='pie-chart' data={data} options={options} />

}
