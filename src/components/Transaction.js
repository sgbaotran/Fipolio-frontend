import "./css/Transaction.css"
import { useState } from 'react'


export default function Transaction(props) {
        
    const [toUpdate, setToUpdate] = useState("")
    const [description, setDescription] = useState("")



    let odd = true
    const data = props.transaction_data
    const transactions = data.map(transaction => {
        odd = !odd
        return (
            <div className={"transaction-item " + (odd ? "odd" : "")}>
                <div className="transaction-item-field transaction-name">{transaction.name}</div>
                <div className="transaction-item-field transaction-description"> {transaction.description}</div>
                <div className="transaction-item-field transaction-price">- ${transaction.price}</div>
                <div className="transaction-item-field transaction-date">{transaction.timestamp}</div>
                <div onClick={() => setToUpdate(transaction._id)} className="transaction-item-field transaction-edit">edit</div>
            </div>
        )
    });

    const TransactionEditForm = () => {
        if (toUpdate) {
            return (
                <div className="transaction-edit-form">
                   	<div className='close-button' onClick={() => setToUpdate(null)}>x</div>
					<input type="text"
						className='description-edit'
						onChange={event => setDescription(event.target.value)}
						value={description}
					/>
					<div className='button' onClick={(toUpdate,description)=>props.updateTransaction(toUpdate,description)}>Confirm</div>
				</div>
            )
        }
    }



        return (
            <div className="transaction-container">
                {transactions}
                <TransactionEditForm />

            </div>
        )
    }
