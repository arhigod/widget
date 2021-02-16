import React from 'react';

import './SelectListItem.css';

const SelectListItem = ({ text = '', checked, id, editable }) => (
    <div className={`selectListItem ${editable ? '' : 'disabled'}`} data-id={id}>
        <input type="checkbox" checked={!!checked} readOnly />
        <span>{text}</span>
    </div>
);
export default SelectListItem;
