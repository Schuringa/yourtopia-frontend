import React from 'react'
import ProductCard from '../components/product/product-card'
export default ({ children }) => (
  <div>
    <h1 className="title">Products:</h1>
    <div className="columns is-multiline is-mobile">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
    {children}
  </div>
)
