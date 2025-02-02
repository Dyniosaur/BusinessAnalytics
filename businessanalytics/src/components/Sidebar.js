import React from 'react'
import {ListNav}  from './ListNav'

function Sidebar() {
  return (
    <div>
        <nav className='sidebar'>
            <ul>
                {ListNav.map((val, key)=>{
                    return(
                        <li className='row' key={key} onClick={()=> {window.location.pathname = val.path}}>
                            <div className='navIcon'>{val.icon}</div>
                            <div className='navTitle'>{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar
