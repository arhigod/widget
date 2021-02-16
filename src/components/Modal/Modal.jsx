import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

import './Modal.css';

const Modal = ({ title, children, rejectText, acceptText, onCloseClick, onAcceptClick, onRejectClick, headerContent, footerContent }) => {
    return (
        <div className='modal_background'>
            <div className='modal_container'>
                <div className='modal_header'>
                    <div className='modal_title_section'>
                        <p className='modal_title'>{title}</p>
                        <Button className='modal_button_close' text='X' type='transparent' onClick={onCloseClick} size='24px' />
                    </div>
                    {headerContent}
                </div>
                <div className='modal_content'>
                    {children}
                </div>
                <div className='modal_footer'>
                    {footerContent}
                    <div className="modal_footer_buttons">
                        <Button text={rejectText} type='reject' onClick={onRejectClick} />
                        <Button text={acceptText} onClick={onAcceptClick} type='accept' />
                    </div>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    rejectText: PropTypes.string,
    acceptText: PropTypes.string,
    onCloseClick: PropTypes.func,
    onAcceptClick: PropTypes.func,
    onRejectClick: PropTypes.func,
    headerContent: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    footerContent: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
Modal.defaultProps = {
    className: '',
    title: '',
    rejectText: 'Cancel',
    acceptText: 'Submit',
    onCloseClick: () => { },
    onAcceptClick: () => { },
    onRejectClick: () => { },
    showReject: true,
    headerContent: null,
    footerContent: null
};
export default Modal;
