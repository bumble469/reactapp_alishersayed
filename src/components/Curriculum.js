import React from 'react'
import '../styling/Curriculum.css'
import view from "../assets/view.png";

export default function Curriculum() {
  return (
    <div className="curriculum" id="curriculum">
        <div className='rowc1'>
            <p>Data Science course learning path</p>
        </div>
        <div className="rowc2">
            <h1><span>Data Science </span>Course Curriculum</h1>
        </div>
        <div class="rowc3">
            <div class="section">
                <div className="leftsec">
                    <h2>C++</h2>
                    <p>Learn C++ for strong programming fundamentals.</p>
                </div>
                <div className="rightsec">
                    <button>View Curriculum<img src={view}/></button>
                </div>
            </div>
            <div class="section">
                <div className="leftsec">
                    <h2>MERN Stack</h2>
                    <p>Master the MERN stack for high-demand projects</p>
                </div>
                <div className="rightsec">
                    <button>View Curriculum<img src={view}/></button>
                </div>
            </div>
            <div class="section">
                <div className="leftsec">
                    <h2>Data Structure & Algorithm</h2>
                    <p>Excel in Data Structures and Algorithms for interview success</p>
                </div>
                <div className="rightsec">
                    <button>View Curriculum<img src={view}/></button>
                </div>
            </div>
            <div class="section">
                <div className="leftsec">
                    <h2>Competitve Programming</h2>
                    <p>Excel in Data Structures and Algorithms for interview success</p>
                </div>
                <div className="rightsec">
                    <button>View Curriculum<img src={view}/></button>
                </div>
            </div>
        </div>       
    </div>
  )
}
