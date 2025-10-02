import React, { useState } from 'react'
import '../make/Checkout.css'
import paro from '../assets/lll.png'
import paro2 from '../assets/check.png'
import paro3 from '../assets/train.png'
import paro4 from '../assets/oooo.png'
import { Minus, Plus } from 'lucide-react'
import paro1 from '../assets/tome.png'

const Checkouts = [
    {
        id: "p1",
        name: "Teddy Bear",
        price: 299,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxcJbs8mMb4K_NmTCGsGIJPb5YaVnr5CXz7g&s",
    },
    
    {
        id: "p2",
        name: "Tatiya ",
        price: 999,
        img: "data:image/jpeg;base64,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",
    },
    
]

const Checkout = () => {
    const [quantities, setQuantities] = useState(() =>
        Checkouts.reduce((acc, item) => {
            acc[item.id] = 1
            return acc
        }, {})
    )

    const increase = (id) => {
        setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }))
    }

    const decrease = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: prev[id] > 1 ? prev[id] - 1 : 1,
        }))
    }

    const total = Checkouts.reduce(
        (sum, item) => sum + item.price * quantities[item.id],
        0
    )

    return (
        <div className='checkout'>
            <div className='upp'>
                <img src={paro2} alt="" className='frst' />
                <img src={paro} alt="" className='dou' />
                <img src={paro1} alt="" className='tri' />
            </div>

            <div className='lite'>
                <h2>Product</h2>
                <h2>Price</h2>
                <h2>Quantity</h2>
                <h2>Subtotal</h2>
            </div>

            <div className='crd'>
                {Checkouts.map((checkout) => (
                    <div className='checkimage' key={checkout.id}>
                        <div className='check'>
                            <div className='crde'>
                                <img src={checkout.img} alt="" className='check-img' />
                                <p className='check-name'>{checkout.name}</p>
                                <h3 className='check-price'>Rs.{checkout.price}/-</h3>

                                <div className='countr'>
                                    <button onClick={() => decrease(checkout.id)}>
                                        <Minus size={25} color='rgba(2, 68, 110, 1)' />
                                    </button>
                                    <span>{quantities[checkout.id]}</span>
                                    <button onClick={() => increase(checkout.id)}>
                                        <Plus size={25} color='rgba(2, 68, 110, 1)' />
                                    </button>
                                </div>

                                <h3 className='subtotal'>
                                    Rs.{checkout.price * quantities[checkout.id]}/-
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='total-box'>
                    <h2>Total: </h2>
                    <div className='total'><h5>Rs.{total}/-</h5>
                        <button>Check out</button>
                    </div>
                </div>
            </div>
            <div className='lower21'>
                <img src={paro3} alt="" className='low1' />
                <img src={paro4} alt="" className='low2' />
                <img src={paro3} alt="" className='low12' />
            </div>
        </div>
    )
}

export default Checkout
