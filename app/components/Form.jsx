import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Form extends Component {

  render() {
    return (
      <form className="form-horizontal">
        <div className="input-group">
          <input className="form-control input-lg" placeholder="user / repo" />
            <span className="input-group-btn">
              <button className="btn btn-lg btn-success" type="button">Compare!</button>
            </span>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  values: React.PropTypes.object
};

Form.defaultProps = {
  values: {
    hello: 'Hello',
    world: 'World'
  }
};

export default Form;
