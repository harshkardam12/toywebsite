import React from 'react'
import "../make/Privacy.css"
import Priv from "../assets/privacy.png"
import Priv1 from "../assets/3.png"
import Priv2 from "../assets/4.png"
import Priv3 from "../assets/2.png"
import Priv4 from "../assets/1.png"
import Priv5 from "../assets/rainbow.png"
function Privacy() {
    return (
        <div className='privacy'>
            <div className='policy'>
                <h1>Privacy <br /> policy</h1>
                <img src={Priv} alt="" className='priv-img' />
            </div>
            <div className='second-policy'>
                <div className='policy-text'>
                    <h2>Information Collection</h2>
                    <p>Welcome to [Your Website Name], your trusted toy and game store. We provide safe, age-appropriate, and fun products for children. Parents/guardians are encouraged to guide kids while browsing, ensuring a safe, enjoyable, and informed shopping experience.</p>
                </div>
                <img src={Priv1} alt="" className='priv1' />
            </div>
            <div className='third-policy'>
                <img src={Priv2} alt="" className='priv2' />
                <div className='policy-text1'>
                    <h2>Use of Information</h2>
                    <p>Our toys and games are shown with clear images, details, and age recommendations. Orders depend on stock availability. Parents/guardians should review choices with children before purchase, ensuring safe, suitable, and joyful products are ordered for every child.</p>
                </div>
            </div>
            <div className='fourth-policy'>
                <div className='policy-text2'>
                    <h2>Sharing of Information</h2>
                    <p>All toy prices are clearly displayed in local currency with taxes where applicable. We offer secure payment options, including cards, UPI, and COD. Parents/guardians should manage transactions to ensure safe, transparent, and hassle-free shopping for children’s products.</p>
                </div>
                <img src={Priv3} alt="" className='priv3' />
            </div>
            <div className='fifth-policy'>
                <img src={Priv4} alt="" className='priv4'/>
                <div className='policy-text3'>
                    <h2>Data Security</h2>
                    <p>We provide timely delivery of toys and games to your doorstep. Shipping charges and estimated timelines are shown at checkout. Parents/guardians should track orders, ensuring safe receipt and a smooth, reliable delivery experience for every child’s product.</p>
                </div>
            </div>
            <img src={Priv5} alt="" className='lastone' />
        </div>
    )
}

export default Privacy
