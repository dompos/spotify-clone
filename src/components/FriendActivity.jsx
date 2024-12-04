import { FaMusic, FaCircle } from "react-icons/fa6"
import ProfilePicture from '../assets/react.svg'

const FriendActivity = ({name, track, album, artist, hours}) => {
  return (
    <div className="flex gap-2 justify-between">
        <img src={ProfilePicture} alt="Profile picture" className="rounded-full h-9"/>
        <div className="flex flex-col justify-between gap-1">
            <h1 className="text-gray-400 font-bold text-xs">{name}</h1>
            <div className="flex items-center gap-1 text-gray-400 text-[10px]">
                <h1>{track}</h1>
                <FaCircle className="text-[3px]"/>
                <h1>{artist}</h1>
            </div>
            <div className="flex items-center gap-1 text-gray-400 text-[10px]">
                <FaMusic className="text-md"/>
                <h1>{album}</h1>
            </div>
        </div>
        <h1 className="text-gray-400 font-bold text-xs">{hours} ore</h1>
    </div>
  )
}

export default FriendActivity