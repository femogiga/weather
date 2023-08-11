

const SearchLoc = ({location,onSearchLoc}) => {
    // location = 'London'
    return (
        <div className='flow-3'>
            <button className='search-loc' onClick={onSearchLoc} id={location}>
                <span>{location} <span className='claret'>&#8250;</span></span>
            </button>

        </div>
    )
}


export default SearchLoc
