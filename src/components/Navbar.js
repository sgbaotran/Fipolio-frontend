import './css/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheckDollar, faBuildingColumns, faMoneyBillTrendUp, faCreditCard, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


export default function Navbar() {
    const [activeElement, setActiveElement] = useState("dashboard")

    const setState = (event) => {
        console.log(event.currentTarget.id)
        setActiveElement(event.currentTarget.id)
    }

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                {/* DASHBOARD */}
                <li
                    id="dashboard"
                    className={`navbar-item ${activeElement === "dashboard" ? "on-active" : ""}`}
                    onClick={setState}>
                    <FontAwesomeIcon icon={faBuildingColumns} />
                </li>

                {/* INCOME MONEY */}
                <li
                    id="income"
                    className={`navbar-item ${activeElement === "income" ? "on-active" : ""}`}
                    onClick={setState}>
                    <FontAwesomeIcon icon={faMoneyCheckDollar} />
                </li>

                {/* EXPENSE MONEY */}
                <li
                    id="expense"
                    className={`navbar-item ${activeElement === "expense" ? "on-active" : ""}`}
                    onClick={setState}>
                    <FontAwesomeIcon icon={faMoneyBillTransfer} />
                </li>

                {/* CREDIT CARD DEBT */}
                <li
                    id="debt"
                    className={`navbar-item ${activeElement === "debt" ? "on-active" : ""}`}
                    onClick={setState}>
                    <FontAwesomeIcon icon={faCreditCard} />
                </li>

                {/* INVESTING */}
                <li
                    id="invest"
                    className={`navbar-item ${activeElement === "invest" ? "on-active" : ""}`}
                    onClick={setState}>
                    <FontAwesomeIcon icon={faMoneyBillTrendUp} />
                </li>
            </ul>
            
        </nav>
    )
}




