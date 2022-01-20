import React, { useState, useEffect} from 'react'
import Card from './components/Card'
import Search from './components/Search'


function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState('')
  

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(`https://pixabay.com/api/?key=25322673-51c084ec97a6742ab3fc36455&q=${term}&image_type=photo`);

      const responseData= await response.json();
      setImages(responseData.hits)
    }

    fetchImage()
  }, [term])

  

    return (
      <>
      <div className="container mx-auto">
      <Search searchText={text => setTerm(text)}/>
      <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => <Card image={image} key={index} />)}
      </div>
      </div>
      </>
    )
  
}

export default App;
