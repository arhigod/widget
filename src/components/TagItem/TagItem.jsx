import React, { useCallback } from 'react';
import Button from '../Button';

import './TagItem.css';

const TagItem = ({ text = '', enabled = true, onRemove, id }) => {
    const onClick = useCallback(() => {
        onRemove(id);
    }, [onRemove, id]);

    return (
        <div className='tagItem'>
            <span>{text}</span>
            <Button text='X' type='transparent' enabled={enabled} onClick={onClick} />
        </div>
    );
};
export default TagItem;
