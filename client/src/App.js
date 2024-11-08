import React from 'react';
import { useState, useEffect } from 'react';
import Prompt from './Prompt';
import ImageCard from './ImageCard';

const App = () => {
  const [images, setImages] = useState({})

  useEffect(() => {
    fetch('/images')
      .then(r => r.json())
      .then(images => setImages(images))
  }, [])

  return (
    <div className="App">
      <h1>DroneDeploy Challenge</h1>
      
      <div>
        <h2>Drone Images</h2>
        
        {images && images.length ? 
          images.map(image => {
            return (
              <div>
                <ImageCard key={image.id} images={images} />
              </div>
            )
          }) : <div></div>}
        

      </div>
      <br></br>
      <Prompt />
    </div>
  )
}

export default App