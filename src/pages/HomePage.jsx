import LikedSong from "../components/LikedSong";
import MusicAdv from "../components/MusicAdv";
import WelcomeSong from "../components/WelcomeSong";


const HomePage = () => {

    return (
        <div className="bg-black/90 px-4 space-y-4 overflow-y-scroll h-screen">
            <MusicAdv />
            <WelcomeSong />
            <LikedSong />
        </div>
    )
}

export default HomePage; 