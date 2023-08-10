import moment from 'moment';
import { dateConverter } from '../utility/unitConverter';

const FullDate = ({dt}) => {
    const dateStyle = {
        textAlign: 'center',
        fontWeight: 'bolder',
        color: '#A09FB1'
    }


     const date = moment(new Date()).format('ddd, D MMM')

    return (
        <div className='' style={dateStyle}>
            <p >Today  <span className='mg-1'>.</span> <span className='mg-1'> {` ${date}`} </span> </p>
        </div>
    )
}


export default FullDate
