import React from 'react'
import "../styling/Refund.css"
import clock from "../assets/clock.png"
import cool from "../assets/coolemoji.png"
import arrow from '../assets/right-arrow.png'
import number2 from '../assets/number2.png'
import hundredperc from '../assets/100-percent.png'
import enroll from '../assets/enroll.png'

export default function Testimonials() {
  return (
    <div className="refund" id="refund">
        <div className="rowt1">
            <h2>Don't miss out on this <span>limited-time opportunity</span> to learn for<span> Free!</span></h2>
            <div className="slide-bar">
                <div className="slide-bar-row1"><h3>100% Refund Offer<img src={cool}></img></h3></div>
                <div className="slide-bar-row2">
                    <p>20 seats left</p>
                    <input type="range" min="0" max="100" value="25" className="slider" />
                </div>
                <div className="slide-bar-row3"><p><img src={clock}></img> Offer ends in 10:00Mins</p></div>
            </div>
        </div>
        <div className="rowt2">
            <div className="rowt2-row1">
                <h2>How does it work?</h2>
            </div>
            <div className="rowt2-row2">
                <hr></hr>
                <div class="image-container">
                    <img src={arrow} alt="image1" class="start-image" />
                    <img src={arrow} alt="image2" class="middle-image" />
                    <img src={arrow} alt="image3" class="end-image" />
                </div>
            </div>
        </div>
        <div className="rowt3">
            <div className="rowt3-row">
                <div class="block">
                    <div class="component1"><h3>Step 1 : Enroll into your favorite course for only &#8377;1,499</h3></div>
                    <div class="component2s"><img src={enroll}/></div>
                    <div class="component3"><p>Start Learning with <b>Lifetime course access.</b></p></div>
                </div>
                <div class="block">
                    <div class="component1"><h3>Step 2 : Complete Course & Assignments within 2 years!</h3></div>
                    <div class="component2"><img src={number2}/><p>years time from the date of enrollment</p></div>
                    <div class="component3"><p>Finish the course within 2 years to qualify for refund.</p></div>
                </div>
                <div class="block">
                    <div class="component1"><h3>Step 3 : Recieve 100% Refund upon Completion</h3></div>
                    <div class="component2"><img src={hundredperc}/><p>Enrollment fee is refunded.</p></div>
                    <div class="component3"><p>Upon course completion within <b>2 Years</b>, Get your <b>&#8377;1,499 Back.</b></p></div>
                </div>
            </div>
        </div>
    </div>
  )
}
