import React from 'react'
import "../make/return.css"
import Mera from "../assets/7.png"
function Return() {
    return (
        <div className='return'>
            <div className='write'>
                <h1>Shipping & <br /> Return Policy</h1>
                <img src={Mera} alt="" className='mera' />

            </div>
            <div className='writen2'>
                <h4>Thank you for shopping with Mind Power World. Please read our Shipping & Returns Policy carefully to ensure a smooth shopping experience. <br />
                    <br />📦 Shipping Policy </h4>
                <ul typeof='disk'>
                    <li>We process and ship orders as quickly as possible after payment confirmation.</li>
                    <li>Delivery times may vary depending on your location and the availability of products.</li>
                    <li>You will receive tracking details once your order is shipped.</li>
                    <li>In case of unexpected delays due to courier services, weather, or other issues beyond our control, Mind Power World will not be held responsible.</li>
                </ul>
                <h4>🔄 Returns & Replacement Policy</h4>
                <ul>
<li>We want you to be happy with your purchase. If you receive a damaged or broken product, please record a video while opening the package. This video is required for any replacement or return request.</li>                
<li>Returns are only accepted within 7 days of delivery, provided the product is unused, in original condition, and with packaging intact.</li>      
<li>Products that are used, without packaging, or without opening video proof will not be eligible for replacement/refund.</li>   
<li>Shipping charges for returns may apply, unless the issue is from our side (wrong or defective product).</li>                </ul>
                <h4>❌ Non-Returnable Items</h4>
<p>For hygiene and safety reasons, certain products like soft toys, baby items, or opened puzzle/game sets may not be eligible for return unless damaged on arrival.</p>            </div>
        </div>
    )
}

export default Return
