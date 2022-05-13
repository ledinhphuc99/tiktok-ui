import React from 'react';
import classNames from 'classnames/bind';   
import style from './menu.scss';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(style);
const HeaderMenu = ({title,onBack }) => {
   
    return (
        <header className={cx('header-menu')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
};

export default HeaderMenu;
