// Code Product Component Here
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    return ();
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  color: PropTypes.string.isRequired,
  wieght: PropTypes.number.isRequired,
}


export default Product;