import React, { useState, useEffect} from 'react'
import './App.css';
import Search from './components/Search';
import Card from './components/Card'

function App() {
  const [images, setImages] = useState([]);
  

  useEffect(() => {
    const fetchImage = async() => {
      try {
      const response = await fetch('https://pixabay.com/api/?key=25322673-51c084ec97a6742ab3fc36455&q=yellow+flowers&image_type=photo&pretty=true');

      console.log(response);

      const responseData = await response.json();

      setImages(responseData.hits);

    } catch (error) {
      console.error(error)
    }
    }
    
    fetchImage();
  }, [])

  return (
    <>
    <Search />
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => {
          return <Card key={index} image={image}/>
        })}
      </div>
    </div>
    </>
  )
}

export default App;
