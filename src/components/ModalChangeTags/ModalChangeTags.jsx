import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import Input from '../Input';
import Select from '../Select';
import SelectList from '../SelectList';
import TagItem from '../TagItem';

import './ModalChangeTags.css';

const filterItems = [10, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(x => ({
    id: x,
    value: x,
    name: '> ' + x
}));

const ModalChangeTags = ({ onCloseClick, onSaveClick, allTags, selectedTags }) => {
    const [selectedItems, setSelectedItems] = useState(selectedTags.slice());
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState(null);

    const onSearch = useCallback(({ currentTarget: { value } }) => {
        setSearch(value);
    }, []);

    const onFilter = useCallback((item) => {
        setFilter(item);
    }, []);

    const onItemClick = useCallback((id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(item => item !== id));
        } else {
            selectedItems.push(id);
            setSelectedItems(selectedItems.slice());
        }
    }, [selectedItems]);

    const onTagRemove = useCallback((id) => {
        setSelectedItems(selectedItems.filter(item => item !== id));
    }, [selectedItems]);

    const onAcceptClick = useCallback(() => {
        onSaveClick(selectedItems);
    }, [onSaveClick, selectedItems]);

    const filterFunction = useCallback((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase()) && (!filter || item.id > filter.value);
    }, [search, filter]);



    const headerContent = useMemo(() => (
        <div className='modalChangetags_headerContent'>
            <Input placeholder='Search...' type='search' onChange={onSearch} value={search} />
            <Select placeholder='No filter' items={filterItems} onChange={onFilter} value={filter} />
        </div>
    ), [onSearch, onFilter, search, filter]);

    const footerContent = useMemo(() => (
        <div className='modalChangetags_footerContent'>
            <span>Selected Items:</span>
            <br />
            {
                allTags.filter(x => selectedItems.includes(x.id)).map(tag => (
                    <TagItem key={tag.id} id={tag.id} text={tag.name} onRemove={onTagRemove} />
                ))
            }
        </div>
    ), [allTags, selectedItems, onTagRemove]);

    return (
        <Modal title='Change tags' acceptText='Save' onCloseClick={onCloseClick} onRejectClick={onCloseClick}
            onAcceptClick={onAcceptClick} headerContent={headerContent} footerContent={footerContent} >
            <SelectList items={allTags} onChange={onItemClick} selectedItems={selectedItems} filterFunction={filterFunction} />
        </Modal>
    );
};

ModalChangeTags.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    selectedTags: PropTypes.arrayOf(PropTypes.number),
    onCloseClick: PropTypes.func,
    onSubmitClick: PropTypes.func
};
ModalChangeTags.defaultProps = {
    items: [],
    selectedTags: [],
    onCloseClick: () => { },
    onSaveClick: () => { }
};
export default ModalChangeTags;
