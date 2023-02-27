import React, {useState} from 'react'
import FeaturesHeader from '../../asset/features/features-header.jpg'
import './features.css'

function Features() {

  // const [hovered, setHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setHovered(false);
  // };

  return (
    <>
     <div className='featureHead'>
        <p>[Our Satellites. Your Command.]</p>
     </div>
     <div className="imgFeatures" >
    <img src={FeaturesHeader} style={{width:'100%'}}/>
    {/* <div className={`overlay ${hovered ? "visible" : ""}`}></div> */}
     </div>
    </>
  )
}

export default Features