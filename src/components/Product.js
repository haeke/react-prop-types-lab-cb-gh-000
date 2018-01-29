// Code Product Component Here
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    return ();
  }
}

export default Product;

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  color: PropTypes.string.isRequired,
  wieght: PropTypes.number.isRequired,
}