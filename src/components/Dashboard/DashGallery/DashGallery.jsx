import React from 'react'
import "./DashGallery.css"
import { FaImages } from 'react-icons/fa'
import img1 from "../../../img/img1.png"
import img2 from "../../../img/img2.png"
import img3 from "../../../img/img3.png"
import img4 from "../../../img/img4.png"
import img5 from "../../../img/img5.png"
import img6 from "../../../img/img6.png"
import img7 from "../../../img/img7.png"
import img8 from "../../../img/img8.png"

export default function DashGallery() {
  return (
    <>
    <div className="dashGallery">
      <div className="gallery-title">
        <h3>Your Gallery Work</h3>
        <FaImages />
      </div>
      <div className="gallery-images">
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
        <img src={img3} alt="img3" />
        <img src={img4} alt="img4" />
        <img src={img5} alt="img5" />
        <img src={img6} alt="img6" />
        <img src={img7} alt="img7" />
        <img src={img8} alt="img8" />
      </div>
    </div>
    </>
    
  )
}
