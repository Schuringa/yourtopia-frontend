import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import axios from 'axios'
import MagnifyIcon from 'mdi-react/MagnifyIcon'

class Search extends Component {
  static async getInitialProps ({ query }) {
    return {
      query
    }
  }

  state = {
    // The active selection's index
    activeSuggestion: 0,
    // The suggestions that match the user's input
    filteredSuggestions: [],
    // Whether or not the suggestion list is shown
    showSuggestions: false,
    // What the user has entered
    userInput: ''
  }

  // Event fired when the input value is changed
  onChange = async e => {
    e.persist()
    this.setState({ userInput: e.target.value })
    const userInput = e.target.value
    const response = await axios({
      method: 'post',
      url: 'https://elastic.pricehelp.com/pricehelp.products/_search',
      data: {
        query: {
          multi_match: {
            query: userInput,
            fields: ['category', 'name']
          }
        },
        size: 5
      }
    })
    try {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: response.data.hits.hits.length > 0,
        userInput: e.target.value,
        suggestions: response.data.hits.hits
      })
    } catch (error) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: true,
        userInput: e.target.value
      })
      return error
    }
  }

  // Event fired when the user clicks on a suggestion
  onClick = e => {
    // Update the user input and reset the rest of the state
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.target.innerText
    })
  }

  render () {
    const {
      onChange,
      onClick,
      state: { suggestions, showSuggestions, userInput }
    } = this
    return (
      <Fragment>
        <div className="column is-paddingless">
          <div className="control has-icons-right">
            <input
              className="input has-text-grey-dark"
              placeholder="Search"
              type="text"
              onChange={onChange}
              value={userInput}
              defaultValue={this.props.search || ''}
            />
            <div className="icon is-right has-text-grey has-cursor-pointer">
              <MagnifyIcon size="1.5em" />
            </div>
          </div>
          {showSuggestions ? (
            <div className="suggestions">
              {suggestions.map((suggestion, index) => {
                return (
                  <Link
                    key={index}
                    href={{
                      pathname: '/products',
                      query: {
                        search: suggestion._source.name,
                        category: suggestion._source.category
                      }
                    }}
                  >
                    <div
                      onClick={onClick}
                      className="has-cursor-pointer suggestion-item"
                    >
                      <p>{suggestion._source.name}</p>
                      <p className="is-size-7">
                        In {suggestion._source.category}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : null}
        </div>

        <style jsx>
          {`
            .suggestions {
              display: block;
              width: 100%;
              position: absolute;
              background: white;
              box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
            }
            .suggestion-item {
              padding: 0.5em 0.75em 0.5em 0.75em;
            }
            .suggestion-item:hover {
              background: whitesmoke;
            }
            .icon {
              pointer-events: auto !important;
            }
          `}
        </style>
      </Fragment>
    )
  }
}

export default Search
