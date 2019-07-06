import React from 'react'
import axios from 'axios'
import { withRouter } from 'next/router'
import ProductCard from '../components/product/product-card'
import Breadcrumb from '../components/breadcrumb/breadcrumb'
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
      const response = await axios.get(
        'https://cx3.pricehelp.com/api/v0.1/products',
        {
          params: {
            match: {
              category: { $regex: `${query.category}` }
            },
            skip: 0,
            limit: 21,
            token:
              'eyJhbGciOiJSU0EtT0FFUCIsImN0eSI6IkpXVCIsImVuYyI6IkExMjhHQ00iLCJ0eXAiOiJKV1QifQ.xjSimwpZHyHjEwhPrj4rYxkyHvplK1KWMyWuJOeEHz3C6p8Ee3b46CwFgPoy46T7LRXOf4PsKCYNBK_YzIiTic4o6YT3ykpupi_Auz6TAPIA70Yt0XTEkcav0313cHGDPnWcj3GOIzLptjAN70NskhjYoHZhP-3hBg017a24VlFTehaXuQPhB5xIqTU3UiX-fyhQjcDnI4C8R5NO_T7MX0dgIaSXgqU-wpQWpdwKnDkKRolZ3-3YMYb6BL-4DFxinbeMmd2U12rS7s8H0FXLHQwwq1muz58vSlxTCedVUhOfBr1sMQ4EgS3ipdkXB2cw5kle48PeQbQHJGM_n-QkWQ.Vs54Iok1evhDwc6_.PfxX_pCXznZ9T3HTTq6FwP8sliop36W-zXDFMG6Xo96dznOSSwaTHCJQz5ZlClvtrHpmGezi8MOOJmMJDClC-P35LYdwxsYHszXY0GbTZW505aKSLCGzqKBhLEM34I9HwXdQGSrifse8WFKdh7rP_9NUGzCCu-RyA6c8DEtNUXXnLcgibkRJrVqMpNju5ACElc6I-P5oPWeG7G7fGwNfwOdG1cVVrMWaQrELAdP9pAnIxK4Rd1N4Eb-tbPaGvr_zCoerGS-wsFrCWkpFgLAZ3OWv73RiQaZQjeviw15xGVfXXXFZGEuThP4aaMHYKKHnxjmM-0a-1RGfXCgcPskOZByKZGn8fom0qygqNHiRs3gFz45cU3eprB9k__f_fpF7__7-aCd3cGv_6tlfV5PwYaJ-66X3r8OTSdn0jdj1zHJf8w-0AOm9_EHQWkT1pOaqC37XaStDC4b7DZK11QiEIANIbVwZAI4_2p77tlcGMfdLikmLMD76S2N4BBPAK4vHSf_Ev6-Bf2YBDigBBBJf9x2yp1G22o2qM3H16rswTvcav-Ar4ZcblbD4mJGBM8Hb14qRjFxywS_hiRauxcxOtd1IHIxG7xwJdhwL98sBbiomNOzfwaHJl1CnZ-zo0c3_r2a8tzZEWwBoHT9dmSrvIJWaXnlupYS6XiRVMyIQPKueVctSKs_5yLiowniOPBKhimLrKezK4fcJGPGdjYSfUQKCHfNU7uFbaZ3cjlqNWWfjWRnKJDEcQvTKnHDUqCjXkPuYYebDD0mVMyUDbCe6COCUmYSGdEGXG9SoDkP3CuN15tmt7Do--lQTkOmAUIaE54IPhn7nteOG9LNNQAaeDozJI3gMO6UcjYxTpqkxbn6fd3taLrkrZfl-apjWI6QS.fq-EwgZntDizV1i8-x6L7w'
          }
        }
      )
      return {
        products: response.data,
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
    currentPage: 1,
    limit: 21
  }

  async loadMoreProducts () {
    this.setState({ loading: true })
    this.state.currentPage++
    try {
      const response = await axios.get(
        'https://cx3.pricehelp.com/api/v0.1/products',
        {
          params: {
            match: {
              category: { $regex: `${this.props.category}` }
            },
            skip: this.state.currentPage * this.state.limit,
            limit: this.state.limit,
            token:
              'eyJhbGciOiJSU0EtT0FFUCIsImN0eSI6IkpXVCIsImVuYyI6IkExMjhHQ00iLCJ0eXAiOiJKV1QifQ.xjSimwpZHyHjEwhPrj4rYxkyHvplK1KWMyWuJOeEHz3C6p8Ee3b46CwFgPoy46T7LRXOf4PsKCYNBK_YzIiTic4o6YT3ykpupi_Auz6TAPIA70Yt0XTEkcav0313cHGDPnWcj3GOIzLptjAN70NskhjYoHZhP-3hBg017a24VlFTehaXuQPhB5xIqTU3UiX-fyhQjcDnI4C8R5NO_T7MX0dgIaSXgqU-wpQWpdwKnDkKRolZ3-3YMYb6BL-4DFxinbeMmd2U12rS7s8H0FXLHQwwq1muz58vSlxTCedVUhOfBr1sMQ4EgS3ipdkXB2cw5kle48PeQbQHJGM_n-QkWQ.Vs54Iok1evhDwc6_.PfxX_pCXznZ9T3HTTq6FwP8sliop36W-zXDFMG6Xo96dznOSSwaTHCJQz5ZlClvtrHpmGezi8MOOJmMJDClC-P35LYdwxsYHszXY0GbTZW505aKSLCGzqKBhLEM34I9HwXdQGSrifse8WFKdh7rP_9NUGzCCu-RyA6c8DEtNUXXnLcgibkRJrVqMpNju5ACElc6I-P5oPWeG7G7fGwNfwOdG1cVVrMWaQrELAdP9pAnIxK4Rd1N4Eb-tbPaGvr_zCoerGS-wsFrCWkpFgLAZ3OWv73RiQaZQjeviw15xGVfXXXFZGEuThP4aaMHYKKHnxjmM-0a-1RGfXCgcPskOZByKZGn8fom0qygqNHiRs3gFz45cU3eprB9k__f_fpF7__7-aCd3cGv_6tlfV5PwYaJ-66X3r8OTSdn0jdj1zHJf8w-0AOm9_EHQWkT1pOaqC37XaStDC4b7DZK11QiEIANIbVwZAI4_2p77tlcGMfdLikmLMD76S2N4BBPAK4vHSf_Ev6-Bf2YBDigBBBJf9x2yp1G22o2qM3H16rswTvcav-Ar4ZcblbD4mJGBM8Hb14qRjFxywS_hiRauxcxOtd1IHIxG7xwJdhwL98sBbiomNOzfwaHJl1CnZ-zo0c3_r2a8tzZEWwBoHT9dmSrvIJWaXnlupYS6XiRVMyIQPKueVctSKs_5yLiowniOPBKhimLrKezK4fcJGPGdjYSfUQKCHfNU7uFbaZ3cjlqNWWfjWRnKJDEcQvTKnHDUqCjXkPuYYebDD0mVMyUDbCe6COCUmYSGdEGXG9SoDkP3CuN15tmt7Do--lQTkOmAUIaE54IPhn7nteOG9LNNQAaeDozJI3gMO6UcjYxTpqkxbn6fd3taLrkrZfl-apjWI6QS.fq-EwgZntDizV1i8-x6L7w'
          }
        }
      )
      this.setState(prevState => {
        return {
          products: [...prevState.products, ...response.data],
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
    const { products, loading } = this.state
    const { router } = this.props
    return (
      <Default meta={this.props.meta}>
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
              {router.query.category}
            </h1>
            <div className="level is-mobile">
              <div className="level-left">
                <div className="level-item is-hidden-mobile">
                  <h1 className="is-size-5">{router.query.category}</h1>
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
              {products.map((value, index) => {
                return <ProductCard key={index} productData={value} />
              })}
            </div>
            <div className="columns is-centered">
              <div className="column is-3 has-text-centered">
                <button
                  onClick={() => this.loadMoreProducts()}
                  className={`${
                    loading ? 'is-loading' : ''
                  } button is-inverted is-outlined is-fullwidth`}
                >
                  Load More
                </button>
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
