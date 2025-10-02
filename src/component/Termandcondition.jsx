import React from 'react'
import "../make/Termandcondition.css"
import Tmg from "../assets/term.png"
import Tmg2 from "../assets/inform.png"
import Tmg3 from "../assets/pro.png"
import Tmg4 from "../assets/bill.png"
import Tmg5 from "../assets/pakage.png"
import Tmg6 from "../assets/money.png"

function Termandcondition() {
    return (
        <div className='term'>

            {/* Section 1 */}
            <div className='term-head'>
                <img src={Tmg} alt="" className='tmg' />
                <header className="header-1">Term <br /> & <br /> Conditions</header>
            </div>

            {/* Section 2 */}
            <div className='term-head2'>
                <img src={Tmg2} alt="" className='tmg2' />
                <span className="span-1">
                    <header className="header-2">General information</header>
                    <p className="para-1">
                        Welcome to [Your Website Name], your trusted toy and game store. We provide safe, age-appropriate, and fun products for children. Parents/guardians are encouraged to guide kids while browsing, ensuring a safe, enjoyable, and informed shopping experience.
                    </p>
                </span>
            </div>

            {/* Section 3 */}
            <div className='term-second'>
                <div className='text'>
                    <h1 className="header-3">Product and orders</h1>
                    <p className="para-2">
                        Our toys and games are shown with clear images, details, and age recommendations. Orders depend on stock availability. Parents/guardians should review choices with children before purchase, ensuring safe, suitable, and joyful products are ordered for every child.
                    </p>
                </div>
                <img src={Tmg3} alt="" className='tmg3' />
            </div>

            {/* Section 4 */}
            <div className='term-head2'>
                <img src={Tmg4} alt="" className='tmg4' />
                <span className="span-2">
                    <header className="header-4">Pricing & Information</header>
                    <p className="para-3">
                        All toy prices are clearly displayed in local currency with taxes where applicable. We offer secure payment options, including cards, UPI, and COD. Parents/guardians should manage transactions to ensure safe, transparent, and hassle-free shopping for children’s products.
                    </p>
                </span>
            </div>

            {/* Section 5 */}
            <div className='term-second'>
                <div className='text1'>
                    <h1 className="header-5">Shipping & Delivery</h1>
                    <p className="para-4">
                        We provide timely delivery of toys and games to your doorstep. Shipping charges and estimated timelines are shown at checkout. Parents/guardians should track orders, ensuring safe receipt and a smooth, reliable delivery experience for every child’s product.
                    </p>
                </div>
                <img src={Tmg5} alt="" className='tmg5' />
            </div>

            {/* Section 6 */}
            <div className='term-head2'>
                <img src={Tmg6} alt="" className='tmg6' />
                <span className="span-3">
                    <header className="header-6">Refund & Return Policy</header>
                    <p className="para-5">
                        Products can be returned within the specified period if unused and in original packaging. Refunds are processed to the original payment method. Parents/guardians should ensure items meet return conditions for a smooth, worry-free refund experience.
                    </p>
                </span>
            </div>

        </div>
    )
}

export default Termandcondition
