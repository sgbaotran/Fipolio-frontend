import './css/Summary.css'


export default function Summary() {

    return <>
        <div className='summary-container'>
            <div className='summary-item summary-total '>
                <h4>Total (Annually)</h4>
                <h2>$ 6500 CAD</h2>
            </div>

            <div className='summary-item summary-income '>
                <h4>Incomes (Annually)</h4>
                <h2>$ 12,381 CAD</h2>
            </div>

            <div className='summary-item summary-expense '>
                <h4>Expenses (Annually)</h4>
                <h2>$ 8,213 CAD</h2>
            </div>
            <div className='summary-item summary-pending '>
                <h4>Credit (Monthly)</h4>
                <h2>$ 352.83 CAD</h2>
            </div>
            <div className='summary-item summary-lent '>
                <h4>Lent</h4>
                <h2>$ 14500.00CAD</h2>
            </div>
        </div>
    </>
}



