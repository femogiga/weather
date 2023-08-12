import { IconButton, Button } from '@mui/material';


const Unit = ({ unit, onClick, myStyle }) => {
   

    return (
        <div className='unit'>
            <IconButton onClick={onClick} style={myStyle}>
                {unit}
            </IconButton>
        </div>
    )
}


export default Unit
