import React,{useState} from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import style from './menu.scss';
const cx = classNames.bind(style);

const defaultFn = () => {}
const Menu = ({ children, items = [], onChange = defaultFn }) => {

    const[history,setHistory] =useState([{data: items}])
    const current = history[history.length - 1]
    const renderItems = () => {
        return current.data.map((item, key) => {
            const isParent =!!item.children
           return <MenuItem key={key} data={item} onClick={() =>{
               if(isParent){
                   setHistory(prev => [...prev, item.children])
               } else{
                   onChange(item)
               }
           }} />
        });
    };
    return (
        <Tippy
            interactive
            delay={[0,700]}
            offset={[12,8]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                    {history.length > 1 && <HeaderMenu title={'Languages'} onBack={()=>{
                        setHistory(prev => prev.slice(0,prev.length-1))
                    }}/>}
                    {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHidden={()=> setHistory(prev => prev.slice(0,1))}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
