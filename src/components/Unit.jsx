import { IconButton,Button } from '@mui/material';


const Unit = ({unit}) => {
    const unitStyle = {
        backgroundColor:'#6E707A',
        color:'white'
    }

    return (
        <div className='unit'>
            <IconButton style={unitStyle}>
             {unit}
            </IconButton>
        </div>
    )
}


export default Unit
