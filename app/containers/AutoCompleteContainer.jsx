import React, { Component } from 'react'
import { inject, observer, PropTypes } from 'mobx-react'
import Autocomplete from 'react-autocomplete'
import { highlightedItem, normalItem, inputStyles } from './AutoCompleteContainer.css'

@inject('autocompleteStore') @observer
class AutoCompleteContainer extends Component {
  constructor() {
    super()
    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSelect(value, item) {
    this.props.autocompleteStore.query = value
  }

  handleChange(event, value) {
    this.props.autocompleteStore.query = value

    if (this.props.autocompleteStore.query.length > 3) {
      this.props.autocompleteStore.search()
    }
  }

  renderItem(item, isHighlighted) {
    return (
      <div
        key={item.name}
        className={isHighlighted ? highlightedItem : normalItem}
        >
        {item.name}
      </div>
    )
  }

  render() {
    const inputProps = {
      id: 'repo-name',
      className: `form-control input-lg ${inputStyles}`,
      placeholder: 'ex. lodash/lodash'
    }

    // Convert to normal JS from MobX array observable
    // more info: https://mobx.js.org/refguide/array.html
    const results = this.props.autocompleteStore.results.slice()

    return <Autocomplete
      inputProps={inputProps}
      ref="autocomplete"
      value={this.props.autocompleteStore.query}
      items={results}
      getItemValue={(item) => item.name}
      onSelect={this.handleSelect}
      onChange={this.handleChange}
      renderItem={this.renderItem}
      wrapperStyle={{ display: 'block' }}
      />
  }
}

AutoCompleteContainer.propTypes = {
  autocompleteStore: PropTypes.observableObject
}

export default AutoCompleteContainer
