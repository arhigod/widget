import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import SelectListItem from '../SelectListItem';

import './SelectList.css';

const SelectList = ({ items, onChange, selectedItems, filterFunction }) => {
    const onItemClick = useCallback(({ target }) => {
        let item = target.closest('.selectListItem');

        if (item) {
            let id = +item.getAttribute('data-id');
            onChange(id);
        }
    }, [onChange]);

    return (
        <div className='selectList'>
            <ul onClick={onItemClick}>
                {
                    items.filter(filterFunction).map((item) => {
                        let selected = selectedItems.includes(item.id);
                        return (
                            <SelectListItem key={item.id} id={item.id} text={item.name} checked={selected} editable={selectedItems.length < 3 || selected} />
                        );
                    })
                }
            </ul>
        </div>
    );
};

SelectList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    selectedItems: PropTypes.arrayOf(PropTypes.number),
    filterFunction: PropTypes.func,
    onChange: PropTypes.func
};
SelectList.defaultProps = {
    items: [],
    selectedItems: [],
    filterFunction: () => true,
    onChange: () => { }
};
export default SelectList;
