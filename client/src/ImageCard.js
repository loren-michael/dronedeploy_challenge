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
          Camera Tilt Degree: {image.image.camera_tilt_deg}<br/>
          Focal Length (mm): {image.image.focal_length_mm}<br/>
          ISO: {image.image.iso}<br/>
          Shutter Speed: {image.image.shutter_speed}<br/>
          Aperture: {image.image.aperture}<br/>
          Color Temp (K): {image.image.color_temp_k}<br/>
          Image Format: {image.image.image_format}<br/>
          File Size (mb): {image.image.file_size_mb}<br/>
          Drone Speed (mps): {image.image.drone_speed_mps}<br/>
          Battery Level Percent: {image.image.battery_level_pct}<br/>
          GPS Accuracy (m): {image.image.gps_accuracy_m}<br/>
          Gimbal Mode: {image.image.gimbal_mode}<br/>
          Subject Detection: {image.image.subject_detection}<br/>
          Image Tags: {image.image.image_tags[0]}, {image.image.image_tags[1]}<br/>
        </div>
      </div>


      <button onClick={e => toggleDetails()}>{show ? "Hide details" : "Show details"}</button>
    </div>
  )
}

export default ImageCard