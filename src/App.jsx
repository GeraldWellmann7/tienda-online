
import './App.css'
import Carousel from './components/Carousel';
import Header from './components/Header.jsx'
import ProductList from './components/Products.jsx'
import { useState } from 'react';
function App() {
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <div className='bg-slate-100'>

      <Header
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
      
      

      
      />

      <Carousel/>


<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>


    </div>

    
  )
}

export default App
