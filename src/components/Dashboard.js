import './css/Dashboard.css'
import React from "react";
import LineChart from './sub-components/LineChart';
import Transaction from './Transaction';
import PieChart from './sub-components/PieChart';
import Summary from './Summary'
import { useState, useEffect } from 'react';




export default function Dashboard() {
    const API_BASE = "http://192.168.0.22:5002"

    /*GET DATA FOR TRANSACTION */
    const [transactions, setTransactions] = useState([])
    const getTransactions = () => {
        fetch(API_BASE + "/dashboard/")
            .then(res => res.json())
            .then(data => setTransactions(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getTransactions()
    }, [])



    /*UPDATE TRANSACTION DATA */
    const updateTransaction = async (id, description) => {
        
    }






return (
    <>
        <h1>Dashboard | <i>Welcome Master Stephen</i> </h1>
        <Summary />
        <div className='dashboard-graph-container'>
            <div className='dashboard-distribution-container'>
                <h2 className='dashboard-distribution-title'> <p>Distribution</p> </h2>
                <PieChart />
            </div>
            <div className='dashboard-profit-container'>
                <h2 className='dashboard-profit-title'> <p>Profit</p> </h2>
                <LineChart transaction_data={transactions} />
            </div>
        </div>


        <div className='dashboard-transaction-container'>
            <h2 className='dashboard-transaction-title'><p>Transaction</p></h2>
            <Transaction transaction_data={transactions} updateTransaction={updateTransaction} />
        </div>

    </>
    )   
}



