import React from 'react'
import "../make/error.css"
import Ball from "../assets/error.png"
function Error() {
    return (
        <div className='error'>
            <div className='erro'>
               <img src={Ball} alt="" />
            </div>
            <h1>Oops!</h1>
            <p>THE PAGE YOU'RE LOOKING FOR DOESN'T FOUND</p>
            <button>Back To Home Page</button>
        </div>
    )
}
export default Error
