import React from 'react';

const Form = ({ addRepo }) =>
(
  <form className="form-horizontal" onSubmit={addRepo}>
    <div className="input-group">
      <input id="repo-name" className="form-control input-lg" placeholder="username/repository &nbsp;&nbsp; ex. twbs/bootstrap" />
      <span className="input-group-btn">
        <button className="btn btn-lg btn-success" type="submit">Compare!</button>
      </span>
    </div>
  </form>
);

Form.propTypes = {
  addRepo: React.PropTypes.func.isRequired
};

export default Form;
