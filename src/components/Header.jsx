import CarritoSvg from '../components/CarritoSvg'
import { useState } from 'react';

export default function Header({allProducts, setAllProducts, total, countProducts, setCountProducts,setTotal}) {

	const [active, setActive] = useState(false);

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};

	const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};	

	return (
		<div className='nav'>
			<div className='tienda-online'>
			Tienda Online
			</div>

			<div className='fondo-tienda'>

				<div className="carrito">
					<div onClick={() => setActive(!active)} className='active'>
						<CarritoSvg />
						<div className='contador'>

							{countProducts}
						</div>
					</div>
				</div>

				<div
					className={`active-boleta ${active ? 'md:h-[1000px] ' : 'hidden'
						}`}
				>
					{allProducts.length ? (
						<>
							<div className='container'>
								{allProducts.map(product => (
									<div className='container-boleta' key={product.id}>
										<div className='boleta'>

											<span className='product-quantity'>
												{product.quantity}
											</span>
											
											<p className='product-nombre'>
												{product.nameProduct}
											</p>
											<span className='product-precio'>
												${product.price}
											</span>
										</div>
										<div className='imagen-close'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth='1.5'
												stroke='currentColor'
												className=''
												onClick={() => onDeleteProduct(product)}
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M6 18L18 6M6 6l12 12'
												/>
											</svg>
											
										</div>

									</div>

								))}
								<div className='contenedor-total'>
									<h3 className='mt-2'>Total:</h3>
									<span className='total'>${total}</span>
								</div>

								<button className='vaciar-carrito' onClick={onCleanCart}>
								Vaciar Carrito
							</button>
										
							</div>				
						</>
					) : (
						<p className='carrito-vacio'>El carrito está vacío</p>
					)}
				</div>
			</div>
		</div>
	);

};