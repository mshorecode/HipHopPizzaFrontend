import React from 'react';
import PropTypes from 'prop-types';

export default function EditOrderInfo() {
  return <></>;
}

EditOrderInfo.propTypes = {
  order: PropTypes.shape({
    customerName: PropTypes.string,
    customerEmail: PropTypes.string,
    customerPhone: PropTypes.string,
  }),
};

EditOrderInfo.defaultProps = {
  order: {
    customerName: '',
    customerEmail: '',
    customerPhone: '',
  },
};
