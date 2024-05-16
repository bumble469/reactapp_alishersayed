import React from 'react'
import "../styling/Testimonials.css"
import certificate from "../assets/certificatedemo.png"
import star from "../assets/pinkstar.png"
import internshipopportunities from "../assets/internship_opportunites.jpg"

export default function More() {
  return (
    <div className="testimonials" id="testimonials">
      <div className="part1">
        <div className='part1-heading'><h2>Top Companies Hiring <span>Data Scientists</span></h2></div>
        <div className='part1-blocks'>
          <div className='block'><p>Logo</p></div>
          <div className='block'><p>Logo</p></div>
          <div className='block'><p>Logo</p></div>
          <div className='block'><p>Logo</p></div>
          <div className='block'><p>Logo</p></div>
        </div>
      </div>
      <div className='part2'>
        <div className='part2-heading'>
          <h2>Unlock <span>6 Certificates</span> & <span>Internship Opportunities!</span></h2>
        </div>
        <div className='part2-block'>
          <div className='block1'>
            <h3>Get 6 Industry Recognized Certificates!</h3>
            <img className='certificateimg' src={certificate} />
            <div className='block1-row3'>
              <div><img src={star}/><p>Official and Verified</p></div>
              <div><img src={star}/><p>Enhances Credibility</p></div>
            </div>
          </div>
          <div className='block2'>
            <h3>Big Internship Opportunities!</h3>
            <p>With every course, we make you not only industry-ready but also help you crack your first internship</p>
            <img src={internshipopportunities}/>
          </div>
        </div>
      </div>
    </div>
  )
}
