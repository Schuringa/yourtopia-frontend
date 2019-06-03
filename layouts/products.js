import React from 'react'
import ProductCard from '../components/product/product-card'
import Breadcrumb from '../components/breadcrumb/breadcrumb'
import Filter from '../components/filters/filters'
import FilterMobile from '../components/filters/filters-mobile'
export default ({ children }) => (
  <div>
    <div className="columns">
      <div className="column is-narrow">
        <Filter />
      </div>
      <div className="column">
        <Breadcrumb />
        <h1 className="title">Category Name:</h1>
        <FilterMobile />
        <div className="columns is-variable is-1-mobile is-multiline is-mobile">
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
      </div>
    </div>

    {children}
  </div>
)
