import React from 'react'
import ProductCard from '../components/product-item/product-card'
export default ({ children }) => (
  <div>
    <h1 className="title">Products:</h1>
    <div className="columns is-multiline">
      <div className="column is-3">
        <ProductCard />
      </div>
      <div className="column is-3">
        <ProductCard />
      </div>
      <div className="column is-3">
        <ProductCard />
      </div>
      <div className="column is-3">
        <ProductCard />
      </div>
      <div className="column is-3">
        <ProductCard />
      </div>
      <div className="column is-3">
        <ProductCard />
      </div>
      <div className="column is-3">
        <ProductCard />
      </div>
      <div className="column is-3">
        <ProductCard />
      </div>
      <div className="column is-3">
        <ProductCard />
      </div>
    </div>
    {children}
  </div>
)
