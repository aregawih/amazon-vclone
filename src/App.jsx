import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import CarouselEffect from './Component/Carousel/CarouselEffect'
import Category from './Component/Category/Category'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <CarouselEffect />
      <Category />
    </>
  )
}

export default App
