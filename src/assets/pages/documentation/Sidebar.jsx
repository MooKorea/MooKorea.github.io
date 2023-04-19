import React from 'react'

export default function Sidebar({sidebarItems, handlePageChange}) {
  return (
    <div className='sidebar'>
        {sidebarItems?.map((e, index) => {
            return (
                <div key={index} onClick={() => handlePageChange(index)}>{e}</div>
            )
        })}
    </div>
  )
}
