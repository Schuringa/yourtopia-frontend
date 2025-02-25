import React from 'react'
import axios from 'axios'
import { withRouter } from 'next/router'
import ProductCard from '../components/product/product-card'
// import Breadcrumb from '../components/breadcrumb/breadcrumb'
import Filter from '../components/filters/filters'
import FilterMobile from '../components/filters/filters-mobile'
import Default from '../layouts/default'
import '../styles.scss'

class ProductsPage extends React.Component {
  static async getInitialProps ({ query }) {
    const meta = {
      title: `PriceHelp ${query.category}`,
      description: `PriceHelp ${query.category}`
    }
    try {
      const response = await axios({
        method: 'post',
        url: 'https://elastic.pricehelp.com/pricehelp.products/_search',
        data: {
          query: {
            query_string: {
              fields: ['category', 'name'],
              query: `${query.category} OR ${query.search}`
            }
          },
          from: 0,
          size: 20
        }
      })
      return {
        products: response.data.hits.hits,
        totalProducts: response.data.hits.total.value,
        category: query.category,
        meta
      }
    } catch (err) {
      return {
        error: err,
        meta
      }
    }
  }

  state = {
    products: this.props.products,
    totalProducts: this.props.totalProducts,
    category: this.props.category,
    currentPage: 0,
    limit: 20
  }

  async loadMoreProducts () {
    this.setState({ loading: true })
    this.state.currentPage++
    try {
      const response = await axios({
        method: 'post',
        url: 'https://elastic.pricehelp.com/pricehelp.products/_search',
        data: {
          query: {
            match: {
              category: this.state.category
            }
          },
          from: this.state.limit,
          size: this.state.currentPage * this.state.limit
        }
      })
      this.setState(prevState => {
        return {
          products: [...prevState.products, ...response.data.hits.hits],
          totalProducts: response.data.hits.total.value,
          currentPage: prevState.currentPage++,
          loading: false
        }
      })
    } catch (err) {
      return {
        error: err
      }
    }
  }

  render () {
    const { products, loading, totalProducts, limit, category } = this.state
    return (
      <Default meta={this.props.meta}>
        <div className="columns">
          <div className="column is-narrow">
            <Filter />
          </div>
          <div className="column">
            {/* <Breadcrumb /> */}
            <h1
              className="is-size-5 is-hidden-tablet"
              style={{ marginBottom: '0.75em' }}
            >
              {category}
            </h1>
            <div className="level is-mobile">
              <div className="level-left">
                <div className="level-item is-hidden-mobile">
                  <h1 className="is-size-5">{category}</h1>
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

            <div className="columns is-variable is-1-mobile is-multiline">
              {products ? (
                products.map((value, index) => {
                  return <ProductCard key={index} productData={value._source} />
                })
              ) : (
                <div>No products found</div>
              )}
            </div>
            <div className="columns is-centered">
              <div className="column is-3 has-text-centered">
                {totalProducts > limit ? (
                  <button
                    onClick={() => this.loadMoreProducts()}
                    className={`${
                      loading
                        ? 'button is-outlined is-inverted is-fullwidth is-loading'
                        : 'button is-outlined is-inverted is-fullwidth'
                    } `}
                  >
                    Load More
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            button {
              border-radius: 0px;
            }
          `}
        </style>
      </Default>
    )
  }
}

export default withRouter(ProductsPage)
