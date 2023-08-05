import moment from 'moment';

const FullDate = () => {
    const dateStyle = {
        textAlign: 'center',
        fontWeight: 'bolder',
        color: '#A09FB1'
    }

    const date = moment(new Date()).format('ddd, D MMM')

    return (
        <div className='flow-1' style={dateStyle}>
            <p >Today  <span className='mg-1'>.</span> <span className='mg-1'> {` ${date}`}</span> </p>
        </div>
    )
}


export default FullDate
