import React from 'react'
import ProductCard from '../components/product/product-card'
import Breadcrumb from '../components/breadcrumb/breadcrumb'
export default ({ children }) => (
  <div>
    <Breadcrumb />
    <h1 className="title">Category Name:</h1>
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
