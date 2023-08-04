import PlaceIcon from '@mui/icons-material/Place';

const Location = ({location})=>{
    location = 'Helsinki'
    const locStyle = {

        fontWeight: 'bolder',
        color:'#A09FB1'
    }
    return(
        <div style={locStyle}>
            <p className='flex flex-just-cen gap'><span><PlaceIcon/></span><span>{location}</span></p>
        </div>
    )

}



export default Location
