import React from 'react'
import "../make/Disclamer.css"
import Disk from "../assets/disk_bg_removed.png"
function Disclamer() {
  return (
    <div className='disclamer'>
      <div><img src={Disk} alt="" className='disk' /></div>
      <div className='sub'><h1>Thank you for visiting Mind Power World.</h1></div>
      <div className='listing'>
        <ul type='disk'>
          <li>The information on the Mind Power World website is provided for general purposes only.</li>
          <li>While we try our best to keep the information correct and updated, we do not guarantee that it is always complete, accurate, or reliable.</li>
          <li>Mind Power World works to keep the website smooth and running, but we will not be responsible if the site is temporarily unavailable due to technical issues.</li>
          <li>Product images shown are for reference only. Actual products, colors, or packaging may vary slightly.</li>          <li>Before opening your package, please make a video. If you find that toys or products are damaged or broken, this video will be required for replacement or return.</li>
          <li>Toys and products should always be used under adult supervision, especially for young children.</li>          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere magni odio rerum praesentium, reprehenderit, vitae ipsa quam sapiente, totam explicabo nam libero molestiae ratione autem. Asperiores odio cum tempora delectus.</li>
          <li>Mind Power World is not responsible for any direct or indirect damage, injury, or loss caused by the use of our products or website.</li>          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere magni odio rerum praesentium, reprehenderit, vitae ipsa quam sapiente, totam explicabo nam libero molestiae ratione autem. Asperiores odio cum tempora delectus.</li>
          <li>External links, if provided, are beyond our control. We do not guarantee or endorse the content on those websites.</li>        </ul>
        <h4>By using our website and purchasing from Mind Power World, you agree to these terms.</h4>
      </div>
    </div>
  )
}

export default Disclamer
