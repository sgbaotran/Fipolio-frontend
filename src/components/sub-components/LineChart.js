import '../css/LineChart.css'
import { CartesianGrid, Line, LineChart as LineCharted, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function LineChart(props) {

    const data = props.transaction_data
    const statisticalData = data.reduce((acc, item) => {
        const { timestamp, price } = item;
        acc[timestamp] = (acc[timestamp] || 0) + price;
        return acc;
    }, {});

    const processedData = Object.entries(statisticalData).map(([date, value]) => ({
        date,
        value
    }));

    console.log(processedData)
    return <div className='line-chart'>
        <ResponsiveContainer width="100%" height="100%" aspect={2}>
            <LineCharted width="100%" height="100%" data={processedData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0, }}
            >
                <CartesianGrid stroke="#27283a" strokeWidth={2} vertical="" />
                <Line dot={{ fill: "rgb(247,196,0)", r: 5 }} type="linear" dataKey="value" stroke="rgb(247,196,0)" strokeWidth={2} />
                <XAxis padding={{ left: 20, right: 20 }} dataKey="date" tick={{ fill: '#818192' }} tickLine={false} axisLine={false}  />
                <YAxis tick={{ fill: '#818192' }} tickLine={false} axisLine={false} maxTickCount={7} tickCount={6} />
                <stop offset="0%" stopColor="#818192" stopOpacity={0.4}></stop>
                <stop offset="75%" stopColor="#818192" stopOpacity={0.05}></stop>
                <Tooltip />
            </LineCharted>
        </ResponsiveContainer >


    </div>



}
