import React, { useState, useCallback } from 'react';
import { useComponentDidUnmount } from '../../hooks/lifecycle';
import PropTypes from 'prop-types';

import './Select.css';

const Select = ({ placeholder, items, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    useComponentDidUnmount(() => {
        document.removeEventListener('click', onDocumentClick);
    }, [onDocumentClick]);

    const onDocumentClick = useCallback(() => {
        setIsOpen(false);
        document.removeEventListener('click', onDocumentClick);
    }, []);

    const onSelectClick = useCallback(() => {
        if (!isOpen) {
            document.addEventListener('click', onDocumentClick);
            setIsOpen(true);
        }
    }, [isOpen, onDocumentClick]);

    const onItemClick = useCallback(({ currentTarget }) => {
        let id = +currentTarget.getAttribute('data-id');
        let item = items.find(x => x.id === id) || null;

        onChange(item);
    }, [items, onChange]);

    return (
        <div className={`select ${isOpen ? 'open' : ''}`} onClick={onSelectClick}>
            <span className={value ? '' : 'placeholder'}>
                {value ? value.name : placeholder}
            </span>
            <ul>
                {
                    value ? <li onClick={onItemClick}>Remove filter</li> : null
                }
                {
                    items.map((item) => (
                        <li className={value && value.id === item.id ? 'selected' : ''} onClick={onItemClick} key={item.id} data-id={item.id}>
                            {item.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

Select.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    value: PropTypes.object,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};
Select.defaultProps = {
    items: [],
    value: null,
    placeholder: 'Select an item',
    onChange: () => { }
};
export default Select;
