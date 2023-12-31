import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import MyLocationIcon from '@mui/icons-material/MyLocation';





const SearchButton = ({ onClick ,onGeo}) => {
    return (
        <div>
        <div className='search-button flex flow-4' style={{ padding: '1rem' }}>
            <Button style={{ textTransform: 'none', backgroundColor: '#6E707A' }} onClick={onClick} variant="contained">Search for places</Button>

            <IconButton onClick={onGeo} style={{ backgroundColor: '#6E707A', color: 'white' }}>
                <MyLocationIcon  />
            </IconButton>


        </div >

        </div>
    )
}


export default SearchButton
