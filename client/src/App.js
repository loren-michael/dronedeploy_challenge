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
        <h3>Recent Images</h3>
        
        {images && images.length ? 
          images.map(image => {
            return (
              <div key={image.id}>
                <ImageCard image={image} />
              </div>
            )
          }) : <div></div>}
      </div>

      <br></br>

      <Prompt images={images} />

    </div>
  )
}

export default App