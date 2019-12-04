import React from 'react'
import './search-box.styles.css'

export const SearchBox=({placeholder,handleChange})=>
{
    return(
        <div>
             <input className="search" type="text" placeholder={placeholder} onChange={handleChange}/>
        </div>
    )
}