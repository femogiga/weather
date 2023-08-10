const Conditions = ({ condition }) => {

    const condStyle = {
        color: '#A09FB1',
        textAlign: 'center',
        fontSize: '1.5rem'
    }

    // switch(condition.toLowercase()){
    //     case 'overcast cloud':
    //     case 'cloudy':

    //     default:
    //         break;
    // }
    return (
        <div className='flow-4' style={condStyle}>
            <h2 >{condition}</h2>
        </div>
    )
}

export default Conditions
