import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import MyLocationIcon from '@mui/icons-material/MyLocation';





const SearchButton = () => {
    return (
        <div className='search-button flex flow-4'>
            <Button style={{ textTransform: 'none', backgroundColor: '#6E707A' }} variant="contained">Search for places</Button>

            <IconButton style={{ backgroundColor: '#6E707A', color: 'white' }}>
                <MyLocationIcon />
            </IconButton>


        </div >
    )
}


export default SearchButton
