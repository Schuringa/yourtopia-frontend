import React, { Component, Fragment } from 'react'
import axios from 'axios'
import MagnifyIcon from 'mdi-react/MagnifyIcon'

class Search extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: ''
    }
  }

  // Event fired when the input value is changed
  onChange = async e => {
    this.setState({ userInput: e.target.value })
    const userInput = e.currentTarget.value
    const response = await axios({
      method: 'post',
      url: 'http://elastic.pricehelp.com:9200/pricehelp.products/_search',
      data: {
        query: {
          multi_match: {
            query: userInput,
            fields: ['brand', 'category', 'name']
          }
        },
        size: 5
      }
    })
    try {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: response.data.hits.hits.length > 0,
        userInput: e.currentTarget.value,
        suggestions: response.data.hits.hits
      })
    } catch (error) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: true,
        userInput: e.currentTarget.value
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
      userInput: e.currentTarget.innerText
    })
  }

  // Event fired when the user presses a key down
  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state
    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      })
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 })
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 })
    }
  }

  render () {
    const {
      onChange,
      onClick,
      onKeyDown,
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
              onKeyDown={onKeyDown}
              value={userInput}
            />
            <div className="icon is-right has-text-grey has-cursor-pointer">
              <MagnifyIcon size="1.5em" />
            </div>
          </div>
          {showSuggestions ? (
            <div className="column suggestions">
              {suggestions.map((suggestion, index) => {
                return (
                  <div
                    className="has-cursor-pointer"
                    key={suggestion}
                    onClick={onClick}
                  >
                    {suggestion._source.category}
                  </div>
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
