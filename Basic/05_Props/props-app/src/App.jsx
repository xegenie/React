import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductDetail from './component/ProductDetail'

function App() {

  // 객체 추가
  const product = {
      id      : "p0001",
      name    : "야자수",
      price   : 52000,
      quantity: 1,
      img     : "http://i.imgur.com/1vpSkbW.png"
  }

  // state 선언
  const [quantity, setQuantity] = useState(product.quantity)

  const increase = () => {
      if (quantity < 100)
      setQuantity(quantity + 1)
  }
  const decrease = () => {
      if (quantity > 1)
      setQuantity(quantity - 1)
  }
  
  return (
    <>
      <ProductDetail product={product} quantity={quantity} increase={increase} decrease={decrease} />
    </>
  )
}

export default App
