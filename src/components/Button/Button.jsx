import React from 'react';

import './Button.css';

const Button = ({ className, onClick, text, type, enabled = true, size }) => (
    <button className={`button ${type} ${className}`} onClick={onClick} type='button' disabled={!enabled} {...size ? { style: { fontSize: size } } : {}}>
        {text}
    </button>
);

export default Button;
