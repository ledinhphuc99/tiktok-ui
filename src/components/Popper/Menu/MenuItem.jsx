import React from 'react'
import Button from '~/components/Button/Button'

import classNames from 'classnames/bind'
import style from './menu.scss'

const cx = classNames.bind(style)
const MenuItem = ({data}) => {
  return (
    <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>{data.title}</Button>
  )
}

export default MenuItem