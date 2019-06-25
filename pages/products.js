import React from 'react'
import axios from 'axios'
import ProductCard from '../components/product/product-card'
import Breadcrumb from '../components/breadcrumb/breadcrumb'
import Filter from '../components/filters/filters'
import FilterMobile from '../components/filters/filters-mobile'
import Default from '../layouts/default'
import '../styles.scss'
const meta = { title: 'Product page', description: 'Product page' }

export default class ProductsPage extends React.Component {
  async componentWillMount () {
    const category = this.props.url.query.category
    axios
      .get('https://cx3.pricehelp.com/api/v0.1/products', {
        withCredentials: true,
        crossdomain: true,
        params: {
          match: {
            category: { $regex: `${category}` }
          },
          skip: 0,
          limit: 12
        }
      })
      .then(response => {
        this.setState({
          prodcuts: response
        })
      })
  }
  render () {
    return (
      <Default meta={meta}>
        <div className="columns">
          <div className="column is-narrow">
            <Filter />
          </div>
          <div className="column">
            <Breadcrumb />
            <h1
              className="is-size-5 is-hidden-tablet"
              style={{ marginBottom: '0.75em' }}
            >
              {this.props.url.query.category}
            </h1>
            <div className="level is-mobile">
              <div className="level-left">
                <div className="level-item is-hidden-mobile">
                  <h1 className="is-size-5">{this.props.url.query.category}</h1>
                </div>
                <div className="level-item">
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
      </Default>
    )
  }
}
