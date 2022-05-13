import React from 'react'
import Button from '~/components/Button/Button'

import classNames from 'classnames/bind'
import style from './menu.scss'

const cx = classNames.bind(style)
const MenuItem = ({data, onClick}) => {
  const classes = cx('menu-item',{
    separate: data.separate
  })
  return (
    <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>{data.title}</Button>
  )
}

export default MenuItem