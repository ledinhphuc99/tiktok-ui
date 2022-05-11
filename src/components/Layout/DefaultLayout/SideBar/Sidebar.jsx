import React from 'react'
import className from 'classnames/bind'
import style from './sidebar.scss'

const cx = className.bind(style)
const Sidebar = () => {
  return (
    <aside className={cx('wrapper-side-bar')}>
      <h2>sidebar</h2>
    </aside>
  )
}

export default Sidebar