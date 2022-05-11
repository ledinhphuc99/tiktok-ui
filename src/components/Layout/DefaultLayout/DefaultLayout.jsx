import React from 'react';
import className from 'classnames/bind';
import style from './defaultLayout.scss';
import Header from '../components/Header/Header';
import Sidebar from './SideBar/Sidebar';

const cx = className.bind(style);
const DefaultLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
