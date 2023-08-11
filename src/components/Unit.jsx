import { IconButton,Button } from '@mui/material';


const Unit = ({unit,onClick ,key}) => {
    const unitStyle = {
        backgroundColor:'#6E707A',
        color:'white'
    }

    return (
        <div className='unit'>
            <IconButton key={key} onClick={onClick} style={unitStyle}>
             {unit}
            </IconButton>
        </div>
    )
}


export default Unit
