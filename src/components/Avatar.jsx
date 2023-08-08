import { getAvatar } from "../utility/getAvatar"


const Avatar = ({ src, condition }) => {

    //get avatar is a utility function that fetches image for weather
    // it is defined inside the utility folder
    src = getAvatar(condition)
    return (
        <div className='flex flex-just-cen flow-2'>
            <img src={src} />
        </div>
    )
}


export default Avatar
