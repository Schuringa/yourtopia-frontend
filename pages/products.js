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
  state = { products: [] }
  async componentWillMount () {
    const category = this.props.url.query.category
    try {
      const response = await axios.get(
        'https://cx3.pricehelp.com/api/v0.1/products',
        {
          params: {
            match: {
              category: { $regex: `${encodeURI(category)}` }
            },
            skip: 0,
            limit: 12,
            token:
              'eyJhbGciOiJSU0EtT0FFUCIsImN0eSI6IkpXVCIsImVuYyI6IkExMjhHQ00iLCJ0eXAiOiJKV1QifQ.xjSimwpZHyHjEwhPrj4rYxkyHvplK1KWMyWuJOeEHz3C6p8Ee3b46CwFgPoy46T7LRXOf4PsKCYNBK_YzIiTic4o6YT3ykpupi_Auz6TAPIA70Yt0XTEkcav0313cHGDPnWcj3GOIzLptjAN70NskhjYoHZhP-3hBg017a24VlFTehaXuQPhB5xIqTU3UiX-fyhQjcDnI4C8R5NO_T7MX0dgIaSXgqU-wpQWpdwKnDkKRolZ3-3YMYb6BL-4DFxinbeMmd2U12rS7s8H0FXLHQwwq1muz58vSlxTCedVUhOfBr1sMQ4EgS3ipdkXB2cw5kle48PeQbQHJGM_n-QkWQ.Vs54Iok1evhDwc6_.PfxX_pCXznZ9T3HTTq6FwP8sliop36W-zXDFMG6Xo96dznOSSwaTHCJQz5ZlClvtrHpmGezi8MOOJmMJDClC-P35LYdwxsYHszXY0GbTZW505aKSLCGzqKBhLEM34I9HwXdQGSrifse8WFKdh7rP_9NUGzCCu-RyA6c8DEtNUXXnLcgibkRJrVqMpNju5ACElc6I-P5oPWeG7G7fGwNfwOdG1cVVrMWaQrELAdP9pAnIxK4Rd1N4Eb-tbPaGvr_zCoerGS-wsFrCWkpFgLAZ3OWv73RiQaZQjeviw15xGVfXXXFZGEuThP4aaMHYKKHnxjmM-0a-1RGfXCgcPskOZByKZGn8fom0qygqNHiRs3gFz45cU3eprB9k__f_fpF7__7-aCd3cGv_6tlfV5PwYaJ-66X3r8OTSdn0jdj1zHJf8w-0AOm9_EHQWkT1pOaqC37XaStDC4b7DZK11QiEIANIbVwZAI4_2p77tlcGMfdLikmLMD76S2N4BBPAK4vHSf_Ev6-Bf2YBDigBBBJf9x2yp1G22o2qM3H16rswTvcav-Ar4ZcblbD4mJGBM8Hb14qRjFxywS_hiRauxcxOtd1IHIxG7xwJdhwL98sBbiomNOzfwaHJl1CnZ-zo0c3_r2a8tzZEWwBoHT9dmSrvIJWaXnlupYS6XiRVMyIQPKueVctSKs_5yLiowniOPBKhimLrKezK4fcJGPGdjYSfUQKCHfNU7uFbaZ3cjlqNWWfjWRnKJDEcQvTKnHDUqCjXkPuYYebDD0mVMyUDbCe6COCUmYSGdEGXG9SoDkP3CuN15tmt7Do--lQTkOmAUIaE54IPhn7nteOG9LNNQAaeDozJI3gMO6UcjYxTpqkxbn6fd3taLrkrZfl-apjWI6QS.fq-EwgZntDizV1i8-x6L7w'
          }
        }
      )
      this.setState({ products: response.data })
    } catch (err) {
      console.log(err)
    }
  }
  render () {
    const { products } = this.state
    console.log(products)
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
              {products.map((value, index) => {
                return <ProductCard productData={value} />
              })}
            </div>
          </div>
        </div>
      </Default>
    )
  }
}
