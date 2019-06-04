import React from 'react'
import ProductCard from '../components/product/product-card'
import Breadcrumb from '../components/breadcrumb/breadcrumb'
import Filter from '../components/filters/filters'
import FilterMobile from '../components/filters/filters-mobile'
export default ({ children }) => (
  <React.Fragment>
    <div className="columns">
      <div className="column is-hidden-mobile  is-narrow">
        <Filter />
      </div>
      <div className="column">
        <Breadcrumb />
        <h1 className="title is-size-5" style={{ marginBottom: '0.75em' }}>
          Clothing
        </h1>
        <div className="level is-mobile">
          <div className="level-left">
            <div className="level-item is-hidden-tablet ">
              <FilterMobile />
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <div className="select is-small">
                <select>
                  <option>Sort By</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>
        </div>

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
  </React.Fragment>
)
