import React, { useState } from 'react'

const ImageCard = (image) => {
  const [show, setShow] = useState(false)

  const toggleDetails = () => {
    setShow(show => !show)
  }

  return (
    <div className="imageCard">
      <h4>Image #{image.image.id}</h4>
      <div className={show ? "" : "hide"}>
        <div>
          <img src={image.image.image_url} alt={image.image.id} />
        </div>
        <div>
          Latitude: {image.image.latitude}<br/>
          Longitude: {image.image.longitude}<br/>
          Altitude: {image.image.altitude_m}<br/>
          Heading Degree: {image.image.heading_deg}<br/>
          File Name: {image.image.file_name}<br/>
          Camera Tilt Degree: {image.image.camera_tilt_deg}
          

        </div>
      </div>


      <button onClick={e => toggleDetails()}>{show ? "Hide details" : "Show details"}</button>
    </div>
  )
}

export default ImageCard