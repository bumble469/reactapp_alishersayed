import React from 'react'
import "../styling/Overview.css"
import gradhat from "../assets/gradhat.png"
import star from "../assets/star.png"
import paperplane from "../assets/paperplane.png"
import qmark from "../assets/qmark.png"
import computer from "../assets/computer.png"
import graduate from "../assets/graduate.png"
import doubt from "../assets/doubt.png"
import project from "../assets/projects.png"

export default function Overview() {
  return (
    <div className="overview" id="overview">
      <div className="upper-part">
        <div className="row1">
          <img src={gradhat} className="image"/><p>An <b>IIT Delhi</b> Alumni Initiative</p>
        </div>
        <div className="row2">
          <h1>Become an Expert in the field of <span>Data Science with 6 courses</span></h1>
        </div>
        <div className="row3">
          <p>A specially crafted Tech kickstarter, with <strong>5+ extensive online courses</strong></p>
        </div>
        <div className="row4">
            <div className="row4-div"><img className="star-image" src={star}/><p>Personal Mentorship</p></div>
            <div className="row4-div"><img className="star-image" src={star}/><p>Internship Assistance</p></div>
            <div className="row4-div"><img className="star-image" src={star}/><p>Industry Certified Courses</p></div>
        </div>
        <div className="row5">
          <button className="row5-btn1">Enroll Now&nbsp;&nbsp;<img src={paperplane}/></button>
          <button className="row5-btn2">Know More&nbsp;&nbsp;<img src={qmark}/></button>
        </div>
      </div>
      <div className="lower-part">
          <div className="part">
            <img src={computer} alt="Image 1" />
            <div>
                <h2>24</h2>
                <p>Courses</p>
            </div>
        </div>
        <div className="separator"></div>
        <div className="part">
            <img src={graduate} alt="Image 2" />
            <div>
                <h2>30k+</h2>
                <p>Learners</p>
            </div>
        </div>
        <div className="separator"></div>
        <div className="part">
            <img src={doubt} alt="Image 3" />
            <div>
                <h2>100k+</h2>
                <p>Doubts solved!</p>
            </div>
        </div>
        <div className="separator"></div>
        <div className="part">
            <img src={project} alt="Image 4" />
            <div>
                <h2>10k+</h2>
                <p>Student projects</p>
            </div>
        </div>
      </div>
    </div>
  )
}
