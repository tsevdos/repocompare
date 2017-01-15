import React, { PropTypes } from 'react';
import { AutoCompleteContainer } from 'containers';

const Form = ({ handleSubmit, resetForm }) =>
(
  <form className="form-horizontal" onSubmit={handleSubmit}>
    <div className="input-group">
      <AutoCompleteContainer resetForm={resetForm} />
      <span className="input-group-btn">
        <button className="btn btn-lg btn-success" type="submit">Compare!</button>
      </span>
    </div>
  </form>
);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.bool.isRequired
};

export default Form;
