import shower from '../photos/Shower.png'

const Avatar = ({ src }) => {
    src = shower

    return (
        <div className='flex flex-just-cen flow-2'>
            <img src={src} />
        </div>
    )
}


export default Avatar
