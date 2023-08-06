
import SearchIcon from '@mui/icons-material/Search';
import SearchLoc from '../SearchLoc';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';





const Search = () => {
    const loc = ['London', 'Barcelona', 'Long Beach']

    return (
        <div className='search '>
            <div className='close-cont'>
                <button>
                    <span className="material-symbols-outlined close-button">
                    close
                </span>
                </button>
            </div>
            <form className='flex'>
                <div className='search-cont'>
                    <SearchIcon />
                    <input type='text' placeholder='search location' />
                </div>

                <div className='button-cont flow-2'>
                    <button>Search</button>
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
