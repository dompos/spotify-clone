import { Outlet } from "react-router-dom"
import LeftSideBar from "../components/LeftSideBar"
import RightSideBar from "../components/RightSideBar"
import Player from "../components/Player"
import { useTrack } from "../components/TrackContext"


const DesktopLayout = () => {

    const { hide } = useTrack();
    const wPlayer = hide ? 'w-auto' : 'w-full';

    return (
        <>
            <div className="grid grid-cols-[300px_1fr_250px] h-screen">
                <div className="bg-black min-h-96">
                    <LeftSideBar />
                </div>
                <Outlet />
                <div className="bg-black min-h-4">
                    <RightSideBar />
                </div>
            </div>
            <div className={`absolute bottom-0 z-10 p-2 ${wPlayer}`}>
                <Player />
            </div>
        </>
    )
}

export default DesktopLayout