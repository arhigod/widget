import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({ placeholder, type, value, onChange }) => (
    <input className='input' placeholder={placeholder} type={type} value={value} onChange={onChange} />
);

Input.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func
};
Input.defaultProps = {
    placeholder: '',
    type: 'text',
    value: '',
    onChange: () => { }
};
export default Input;
