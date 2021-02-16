import React, { useState, useCallback } from 'react';
import { useComponentDidMount } from '../../hooks/lifecycle';
import TagItem from '../TagItem';
import Button from '../Button';
import ModalChangeTags from '../ModalChangeTags';

import './Widget.css';

const Widget = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [allTags, setAllTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);

    useComponentDidMount(() => {
        setAllTags([...Array(1000)].map((_, i) => ({
            id: i + 1,
            name: 'Name ' + (i + 1)
        })));
        setSelectedTags(JSON.parse(localStorage.getItem('selectedTags')) || [1, 3, 5]);
    });

    const onAddMovieClick = useCallback(() => {
        setIsModalOpened(true);
    }, []);

    const onCloseModalClick = useCallback(() => {
        setIsModalOpened(false);
    }, []);

    const onSaveModalClick = useCallback((items) => {
        setIsModalOpened(false);
        setSelectedTags(items);
        localStorage.setItem('selectedTags', JSON.stringify(items));
    }, []);

    return (
        <>
            <span>Selected Items:</span>
            <br />
            {
                allTags.filter(x => selectedTags.includes(x.id)).map(tag => (
                    <TagItem key={tag.id} text={tag.name} enabled={false} />
                ))
            }
            <br />
            <Button className='smallMarginTop' text='Change' type='accept' onClick={onAddMovieClick} />
            {isModalOpened && <ModalChangeTags onCloseClick={onCloseModalClick} onSaveClick={onSaveModalClick} allTags={allTags} selectedTags={selectedTags} />}
        </>
    );
};

export default Widget;
