import { createContext, createRef, useState } from "react"
import { FaPlay, FaPause } from "react-icons/fa6"
import ReactPlayer from "react-player"
import PlayerControls from "./PlayerControls";

export const VolumeContext = createContext();

const PlayerAudio = ({ track }) => {

  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const handlePlayPause = () => setPlaying(!playing);

  const handleProgress = (state) => { setProgress(state.played * 100) };

  const handleDuration = (duration) => { setDuration(duration) };

  const handleEnded = () => {
    handlePlayPause();
    setProgress(0);
  };

  const handleSeek = (e) => {
    const progressBar = e.target;
    const seekTime = (e.nativeEvent.offsetX / progressBar.offsetWidth) * duration;
    setProgress((e.nativeEvent.offsetX / progressBar.offsetWidth) * 100);
    playerRef.current.seekTo(seekTime);
  };

  const playerRef = createRef();

  return track?.album && (
    <div className="flex justify-end md:justify-normal md:gap-96">
      <div className='flex flex-col justify-center md:justify-normal items-center'>
          {playing ?
            <button onClick={() => { handlePlayPause() }} className="bg-white rounded-full text-center p-2" ><FaPause /></button> :
            <button onClick={() => { handlePlayPause() }} className="bg-white rounded-full text-center p-2" ><FaPlay /></button>}
        <ReactPlayer
          ref={playerRef}
          url={track.preview}
          playing={playing}
          controls={false}
          volume={volume}
          onProgress={handleProgress}
          onEnded={handleEnded}
          onDuration={handleDuration}
          className='hidden'
        />
        <div className="hidden md:flex items-center gap-2 ">
          <h1 className="text-gray-500">{`${Math.floor(((progress * duration) / 100) / 60)}:${Math.floor((progress * duration) / 100) % 60}`}</h1>
          <div onClick={handleSeek} className="h-2 w-64 bg-gray-500 rounded-sm">
            <div className="h-full bg-white rounded-sm" style={{ width: `${progress}%` }}  ></div>
          </div>
          <h1 className="text-gray-500">{` ${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`}</h1>
        </div>
      </div>
      <VolumeContext.Provider value={[volume, setVolume]} >
        <PlayerControls />
      </VolumeContext.Provider>
    </div>
  )
}

export default PlayerAudio