const Temp = ({ temp,unit }) => {
    // temp = 15
    const tempStyle = {
        fontSize: '4rem',
        textAlign: 'center',
        position: 'relative',
        color: 'white'
    }
    return (
        <div className='temp flow-2' style={tempStyle}>
            <h1>{temp}<span style={{ fontSize: '3rem', position: 'relative', bottom: '1rem', color: '#A09FB1' }}>&#176;</span><span style={{ fontSize: '3rem', position: 'relative', bottom: '1rem', color: '#A09FB1' }}>{unit}</span></h1>
        </div>
    )
}

export default Temp
