import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Player from "../components/Player"
import { useTrack } from "../components/TrackContext"


const MobileLayout = () => {

  const { hide } = useTrack();
  const wPlayer = hide ? 'w-auto' : 'w-full';

  return (
    <div className="relative h-screen">
      <Outlet />
      <div className="absolute bottom-0 flex flex-col items-center gap-2 w-full bg-gradient-to-b from-transparent to-black to-90%">
        <div className={`p-2 ${wPlayer}`}>
          <Player />
        </div>
        <NavBar />
      </div>
    </div>
  )
}

export default MobileLayout