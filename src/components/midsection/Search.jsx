
import SearchIcon from '@mui/icons-material/Search';
import SearchLoc from '../SearchLoc';
import CloseIcon from '@mui/icons-material/Close';

import { useEffect, useState } from 'react';
import { getStepContentUtilityClass } from '@mui/material';





const Search = ({ visible, onClick, city, onChange, onSubmit, inputValue}) => {
    const loc = ['London', 'Barcelona', 'Long Beach']
    const [focus, setFocus] = useState(true)

    const closeSearch = {
        display: 'none'
    }
    useEffect(() => {
        console.log('city', city)
    }, [city])

    const handleFocus = () => {
        setFocus(false)
    }

    const handleBlur = () => {
        setFocus(true)
    }




    return (
        <div className={`search`} style={visible ? null : closeSearch}>
            <div className='close-cont'>
                <button onClick={onClick}>
                    <span className="material-symbols-outlined close-button">
                        close
                    </span>
                </button>
            </div>
            <form className='flex' onSubmit={onSubmit} >

                <div className='search-cont'>
                    {focus && <SearchIcon />}
                    <input value={inputValue} type='text' placeholder='search location' onChange={onChange} name={city} onFocus={handleFocus} onBlur={handleBlur} />
                </div>

                <div className='button-cont flow-2'>
                    <button >Search</button>
                </div>
            </form>
            <div>
                {
                    loc.map((place, index) => (<SearchLoc key={index} location={place} />))
                }
            </div>

        </div >
    )
}


export default Search
