import React, { PropTypes } from 'react'
import { AutoCompleteContainer } from 'containers'

const Form = ({ handleSubmit }) =>
(
  <form className="form-horizontal" onSubmit={handleSubmit}>
    <div className="input-group">
      <AutoCompleteContainer />
      <span className="input-group-btn">
        <button className="btn btn-lg btn-success" type="submit">Compare!</button>
      </span>
    </div>
  </form>
)

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default Form
