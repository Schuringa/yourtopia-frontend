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
    const { suggestions } = this.props
    const userInput = e.currentTarget.value
    const response = await axios({
      method: 'post',
      url: 'http://elastic.pricehelp.com:9200/pricehelp.products/_search',
      data: {
        query: {
          match: {
            category: userInput
          }
        },
        size: 5
      }
    })
    console.log(response)
    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    )

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    })
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
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this

    let suggestionsListComponent

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = 'suggestion-active'
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              )
            })}
          </ul>
        )
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        )
      }
    }

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
            <span className="icon is-right has-text-grey">
              <MagnifyIcon size="1.5em" />
            </span>
          </div>
        </div>
        {suggestionsListComponent}
      </Fragment>
    )
  }
}

export default Search
