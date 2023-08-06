

const SearchLoc = ({location}) => {
    // location = 'London'
    return (
        <div className='flow-3'>
            <button className='search-loc' >
                <span>{location} <span className='claret'>&#8250;</span></span>
            </button>

        </div>
    )
}


export default SearchLoc
