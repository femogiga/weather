
import SearchIcon from '@mui/icons-material/Search';
import SearchLoc from '../SearchLoc';
import CloseIcon from '@mui/icons-material/Close';

import { useEffect, useState } from 'react';






const Search = ({ visible, onClick, city, onChange, onSubmit, inputValue, searchLoc }) => {
     const [loc , setLoc]=useState([])
    const [focus, setFocus] = useState(true)

    const array = []

    const closeSearch = {
        display: 'none'
    }
    useEffect(() => {
        console.log('city', city)

        setLoc([...array,city])

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
                    searchLoc.map((place, index) => (<SearchLoc key={index} location={place} />))
                }
            </div>

        </div >
    )
}


export default Search
