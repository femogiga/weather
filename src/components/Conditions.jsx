const Conditions = ({condition})=>{
    condition = 'Shower'
    const condStyle = {
        color:'#A09FB1',
        textAlign:'center',
        fontSize:'1.5rem'
    }
    return(
        <div className='flow-2' style={condStyle}>
            <h2 >{condition}</h2>
        </div>
    )
}

export default Conditions
