import React from 'react'
import '../make/about.css'
import God from '../assets/tome.png'
import Train from '../assets/chil.png'
function About() {
  return (
    <div className='about'>
      <div className='alo'>
        <h1>ABOUT US</h1>
      </div>
      <div className='alol'>
        <h1>Our Story</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta atque maxime enim esse, provident exercitationem, odio porro perferendis eveniet, dolorem eaque soluta omnis dolores iusto vero aliquam nisi! Debitis, dicta. Nesciunt facere inventore, illo dignissimos laborum saepe error, facilis odio, dolorem ex delectus. Atque eius perspiciatis cum sunt! Alias voluptatum dolores facilis expedita assumenda at nulla consequatur laudantium maxime repudiandae exercitationem sint et molestiae, nesciunt qui debitis. Voluptatem maxime quaerat corrupti nihil molestias impedit doloremque optio deleniti, deserunt exercitationem delectus, sapiente odit odio? Illum excepturi dolor, facere cum ullam illo esse corrupti eveniet, libero, natus vero dolore quam debitis sunt!</p>
        <div className='alok'>
          <div className='ulu'>
            <ul>
              <h2>MISSION</h2>
              <li>To spark curiosity and creativity in every child.</li>
              <li>To create safe, engaging, and educational toys.</li>
              <li>To empower parents with tools that support their children’s development.</li>
              <li>To nurture imagination through fun learning experiences.</li>
            </ul>
          </div>
          <div className='god'>
            <img src={God} alt="" />
          </div>
        </div>
        <div className='why'>
          <div className='train'><img src={Train} alt="" /></div>
          <div className='khat'>
            <h1>WHY PARENT TRUST US</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, alias!</p>
            <ol type='✓'>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            </ol>
          </div>
        </div>
      </div >

    </div>
  )
}

export default About

