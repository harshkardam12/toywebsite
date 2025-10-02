import React from 'react'
import "../make/Faq.css"
import Faqim from "../assets/faq.png"
import Faqim2 from "../assets/7.png"
import Faqim3 from "../assets/8.png"
import Faqim4 from "../assets/9.png"
function Faq() {
    return (
        <div className='faq'>
            <img src={Faqim} alt="" className='faq-img' />
            <div className='faq1'>
                <div className='boxer'>
                    <div className='boxer-img'>
                        <img src={Faqim2} alt="" className='faqim' />
                        <h1>SHIPPING</h1>
                    </div>
                    <div className='boxer-text'>
                        <h1>What are the shipping option ?</h1>
                        <h1>When will I receive my order ? </h1>
                    </div>
                </div>
                <div className='boxer2'>
                    <div className='boxer-img2'>
                        <img src={Faqim3} alt="" className='faqim2' />
                        <h1>PAYMENT</h1>
                    </div>
                    <div className='boxer-text2'>
                        <h1>What Payment methods are accepted ?</h1>
                        <h1>how do I use discount code ?  </h1>
                    </div>
                </div>
                <div className='boxer3'>
                    <div className='boxer-img3'>
                        <img src={Faqim4} alt="" className='faqim3' />
                        <h1>RETURNS</h1>
                    </div>
                    <div className='boxer-text3'>
                        <h1>What is your return policy ? </h1>
                        <h1>How long does a return take ? </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
