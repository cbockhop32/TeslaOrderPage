import React, {useContext} from 'react';
import {ModalContext} from '../../context/ModalContext';
import './Order.scss';

function Order() {
    const {showModal,setOrderToggle } = useContext(ModalContext);


    return (
        <div className="Order">
            <h1>Order Your Model 3</h1>
            <p>Estimated Delivery: 1-2 weeks</p>
            <button className="Order-Btn" onClick={() => {showModal(true);setOrderToggle(true)}}>Continue to Payment</button>
            
        </div>
    )
}

export default Order
