import { useEffect, useState } from "react"
import { searchFetch } from "../utils/Fetch";
import Track from "./Track";

const LikedSong = () => {

    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);

    const artistName = 'motionlessinwhite';

    useEffect(() => {
        const fetchTracks = async () => {
            try {
                const result = await searchFetch(artistName);
                setTracks(result);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchTracks();
    }, [])

    return <>
        <h1 className="hidden md:block text-white font-bold text-2xl">Altro che ti potrebbe piacere</h1>
        {loading ? (<h1 className="text-white text-5xl">Loading...</h1>)
            :
            (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {tracks?.map((track) => (
                        <Track track={track} bg={'[#363636]'} isVertical={true} />
                    ))}
                </div>
            )}
    </>
}

export default LikedSong