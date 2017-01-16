import React, { Component, PropTypes } from 'react';
import Autocomplete from 'react-autocomplete';
import { searchRepo } from 'helpers/api';
import { highlightedItem, normalItem, inputStyles } from './AutoCompleteContainer.css';

class AutoCompleteContainer extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      repos: []
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.resetForm) {
      this.setState({
        value: '',
        repos: []
      });
    }
  }

  handleSelect(value, item) {
    this.setState({ value });
  }

  handleChange(event, value) {
    this.setState({ value });
    if (event.target.value.length > 3) {
      searchRepo(value, this);
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
    );
  }

  render() {
    const inputProps = {
      id: 'repo-name',
      className: `form-control input-lg ${inputStyles}`,
      placeholder: 'ex. lodash/lodash'
    };

    return <Autocomplete
      inputProps={inputProps}
      ref="autocomplete"
      value={this.state.value}
      items={this.state.repos}
      getItemValue={(item) => item.name}
      onSelect={this.handleSelect}
      onChange={this.handleChange}
      renderItem={this.renderItem}
      wrapperStyle={{ display: 'block' }}
      />;
  }
}

AutoCompleteContainer.propTypes = {
  resetForm: PropTypes.bool.isRequired
};

export default AutoCompleteContainer;
