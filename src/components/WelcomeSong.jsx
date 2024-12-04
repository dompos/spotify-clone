import Track from "./Track"
import { useEffect, useState } from "react";
import { searchFetch } from "../utils/Fetch"
import { FaBell, FaClock, FaGear } from "react-icons/fa6";


const WelcomeSong = () => {

    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);

    const artistName = 'gigidalessio';
    const numTrack = 6;

    useEffect(() => {
        let element = [];

        const fetchTracks = async () => {
            try {
                const result = await searchFetch(artistName);
                for (let i = 0; i < numTrack; i++) {
                    element.push(result[i]);
                }
                setTracks(element);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchTracks();

    }, [])
    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-white font-bold text-2xl md:text-3xl">Buonasera</h1>
                <div className="flex items-center gap-4 md:hidden text-white">
                    <FaBell />
                    <FaClock />
                    <FaGear />
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {loading ? (<h2 className="text-white text-5xl">Loading...</h2>) : (
                    <>
                        {tracks.map((track) => (
                            <Track key={tracks.indexOf(track)} track={track} bg={'[#363636]'} />
                        ))}
                    </>
                )}
            </div>
        </>
    )
}

export default WelcomeSong