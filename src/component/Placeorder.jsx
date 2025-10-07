import React from 'react'
import "../make/Placeorder.css"
import Ballone from '../assets/ballon.png'
import Tddy from '../assets/teddy2.png'
import Pin from "../assets/block.png"
function Placeorder() {
    return (
        <div className='placeorder'>
            <div className='place1'><h1>CHECKOUT</h1></div>
            <div className='imgk'>
                <img src={Tddy} alt="" className='tddy' />
                <img src={Ballone} alt="" className='ballone' />
            </div>
            <div className='check-detail'>
                <div className='check-add'>
                    <h2>Shipping address</h2>
                    <input type="text" placeholder='Full Name' className='add-bttn' />
                    <input type="text" placeholder='Street Address' className='add-bttn' />
                    <input type="text" placeholder='City' className='add-bttn' />
                    <input type="text" placeholder='Pin Code' className='add-bttn' />
                </div>
                <div className='check-pin'>
                    <img src={Pin} alt="" className='Pin-img' />
                </div>
            </div>
            <div className='check-detail2'>
                
            </div>
        </div>
    )
}

export default Placeorder
