import React from 'react';
import classNames from 'classnames/bind';
import style from './Popper.scss';

const cx = classNames.bind(style)
const Wrapper = ({ children,className }) => {
    return <div className={cx('wrapper-popper',className)}>{children}</div>;
};

export default Wrapper;
