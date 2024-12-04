import React, { useContext } from 'react'
import { FaVolumeOff } from 'react-icons/fa6'
import { VolumeContext } from './PlayerAudio';

const PlayerControls = () => {
  const [volume, setVolume] = useContext(VolumeContext);

  const handleVolume = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
  }

  return (
    <div className='flex items-center gap-2' >
      <FaVolumeOff className='text-white text-xl' />
      <input type='range' min={0} max={1} step={0.01} value={volume} onChange={handleVolume} className='bg-gray-500 appearance-none h-1 w-24 md:w-auto rounded-full cursor-pointer' />
    </div>
  )
}

export default PlayerControls