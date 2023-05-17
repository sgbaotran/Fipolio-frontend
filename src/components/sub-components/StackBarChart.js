import '../css/StackBarChart.css'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function StackBarChart() {

    const data = [
        { name: "2016", react: 32, angular: 34 },
        { name: "2017", react: 33, angular: 33 },
        { name: "2018", react: 34, angular: 32 },
        { name: "2019", react: 25, angular: 32 },
        { name: "2020", react: 28, angular: 32 },
        { name: "2021", react: 45, angular: 32 },
    ]

    return <div className='line-chart'>
        <ResponsiveContainer width="100%" height="100%" aspect={2}
        >
            <BarChart width="100%" height="100%" data={data}
            // margin={{ top: 20, right: 20, left: 0, bottom: 20, }}
            >
                <CartesianGrid stroke="#27283a" strokeWidth={3} vertical="" />
                <Bar dataKey="react" stackId="a" fill="#8884d8" />

                <Bar dataKey="angular" stackId="a" fill="#82ca9d" />

                <YAxis tick={{ fill: '#818192' }}  tickLine={{ stroke: '#818192' }} fontSize="18" />
                <XAxis padding={{ left: 30, right: 30 }}  tick={{ fill: '#818192' }} dataKey="name" fontSize="18" />
                <stop offset="0%" stopColor="#818192" stopOpacity={0.4} width="25"></stop>
                <stop offset="75%" stopColor="#818192" stopOpacity={0.05}></stop>
                <Tooltip />

            </BarChart>
        </ResponsiveContainer >


    </div>


}