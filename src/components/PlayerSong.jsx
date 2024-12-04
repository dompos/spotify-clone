import { FaHeart, FaAngleDown } from "react-icons/fa6"
import Track from "./Track";
import { useTrack } from "./TrackContext";


const PlayerSong = ({ track }) => {

    const {hide, setHide, setTrack} = useTrack();

    return track?.album && (
        <div className="flex justify-between items-center gap-4">
            <button onClick={() => { setHide(!hide); setTrack(undefined) }} className="absolute top-5 hidden md:block">
                <FaAngleDown className="text-gray-500" />
            </button>
            <Track track={track} />
            <FaHeart className="text-gray-500" />
        </div>
    )
}

export default PlayerSong