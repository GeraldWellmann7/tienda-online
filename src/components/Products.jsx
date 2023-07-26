import { data } from '../data';


export default function ProductList({allProducts, setAllProducts, countProducts, setCountProducts, total, 
    setTotal,
}){



    const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

    return (
        <div className='container'>
            
            <div className='stock'>
            Stock
            </div>

        
        <div className='container-productos'>
            
            
            
        {data.map(product => (

            <div className='card-productos' key={product.id}>
                <figure>
                    <img className='imagen-producto' src={product.img} alt={product.nameProduct} />
                </figure>
                <div className='datos-producto'>
                    <h2 className='nombre-producto'>{product.nameProduct}</h2>
                    <p className='font-semibold'>${product.price}</p>
                    <button className='boton-añadir' onClick={() => onAddProduct(product)}>
                        Añadir al carrito
                    </button>
                </div>
            </div>
            
        ))}
        
    </div>
    </div>
    )
    
}