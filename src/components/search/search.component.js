import React from 'react';
import './search.styles.css'

 export const Search = ({placeholderValue, changeAction}) => (
            <input className='search'
                   type='search'
                   placeholder={placeholderValue}
                   onChange={changeAction}
            />

);

