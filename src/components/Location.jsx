import PlaceIcon from '@mui/icons-material/Place';

const Location = ({city})=>{
    // location = 'Helsinki'
    const locStyle = {

        fontWeight: 'bolder',
        color:'#A09FB1'
    }
    return(
        <div style={locStyle} className='location' >
            <p className='flex flex-just-cen gap'><span><PlaceIcon/></span><span>{city}</span></p>
        </div>
    )

}



export default Location
