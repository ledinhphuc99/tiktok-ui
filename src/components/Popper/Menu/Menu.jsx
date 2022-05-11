import React from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import MenuItem from './MenuItem';
import style from './menu.scss';

const cx = classNames.bind(style);
const Menu = ({ children, items = [] }) => {
    const renderItems = () => {
        return items.map((item, key) => <MenuItem key={key} data={item} />);
    };
    return (
        <Tippy
            interactive
            delay={[0,700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
