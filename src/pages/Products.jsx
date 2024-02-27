import React, { useState } from 'react'
import getApi from '../hooks/getApi'
import Product from '../components/Product';
import Preloader from '../components/Preloader';
import Modal from '../components/Modal';

function Products() {
  const [modal, setModal] = useState(false);
  const { datas: products, loading } = getApi('/products');

  if (loading) return <Preloader />

  return (
    <div className='products'>
      <button onClick={() => setModal(true)}>Add</button>
      <Modal modal={{modal, setModal}}/>
      {
        products.map((product) => <Product key={product.id} product={product} />)
      }
    </div>
  )
}

export default Products