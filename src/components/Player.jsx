import PlayerSong from "./PlayerSong"
import PlayerAudio from "./PlayerAudio"
import { FaAngleUp } from "react-icons/fa6"
import { useTrack } from "./TrackContext";

const Player = () => {

  const {track, hide, setHide} = useTrack();

  return (track?.album && !hide) ? (
    <div className="flex justify-between w-full bg-[#191919] px-6 py-3 border-t border-gray-500/20">
        <PlayerSong track={track} />
        <PlayerAudio track={track} />
    </div>
  ) : (
    <button onClick={() => { setHide(!hide) }} className="hidden md:block">
      <FaAngleUp className="text-gray-500 text-5xl" />
    </button>
  )
}

export default Player