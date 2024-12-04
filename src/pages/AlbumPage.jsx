import { useEffect, useState } from "react"
import { albumFetch } from "../utils/Fetch";
import { useParams } from "react-router-dom";
import { FaCircle, FaClock } from "react-icons/fa6";
import SeparationLine from "../components/SeparationLine";
import Track from "../components/Track";


const AlbumPage = () => {

    const { id } = useParams();
    const [album, setAlbum] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                const result = await albumFetch(id);
                setAlbum(result);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchAlbum();
    }, [])

    return (
        <div className="bg-[#191919] bg-gradient-to-b from-green-500 to-[#191919] to-70% overflow-y-scroll h-screen">
            {loading ? (<h1 className="text-white text-5xl">Loading...</h1>)
                :
                (
                    <>
                        <div className="flex flex-col md:flex-row md:items-end gap-4 p-6">
                            <img src={album.cover_medium} alt="Album Cover" className="size-48 mx-auto md:mx-0 md:size-auto shadow-2xl shadow-black" />
                            <div className="flex flex-col md:gap-4 text-white">
                                <h1 className="hidden md:block font-bold text-base">Album</h1>
                                <h1 className="font-bold text-2xl md:text-6xl mb-2 md:mb-0">{album.title}</h1>
                                <div className="hidden md:flex items-center gap-1">
                                    <img src={album.artist.picture_small} alt="Artist Picture" className="size-6 rounded-full" />
                                    <h1 className="font-bold text-xs">{album.artist.name}</h1>
                                    <FaCircle className="text-[3px]" />
                                    <h1 className="font-bold text-xs">{album.release_date.slice(0, 4)}</h1>
                                    <FaCircle className="block text-[3px]" />
                                    <div className="flex items-center gap-1">
                                        <h1 className="font-bold text-xs">{album.nb_tracks + " brani,"}</h1>
                                        <h1 className="font-bold text-xs text-gray-500/70">{Math.floor(album.duration / 60) + " min " + (album.duration % 60) + " sec."}</h1>
                                    </div>
                                </div>
                                <div className="md:hidden flex flex-col gap-3">
                                    <div className="flex items-center gap-1">
                                        <img src={album.artist.picture_small} alt="Artist Picture" className="size-6 rounded-full" />
                                        <h1 className="font-bold text-xs">{album.artist.name}</h1>
                                    </div>
                                    <div className="flex items-center text-gray-500 gap-1">
                                        <h1 className="text-xs font-bold">Album</h1>
                                        <FaCircle className="text-[3px]" />
                                        <h1 className="font-bold text-xs">{album.release_date.slice(0, 4)}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-screen bg-black/10 p-4">
                            <div className="flex items-center text-gray-500 gap-4 font-semibold">
                                <h1>#</h1>
                                <div className="flex justify-between w-full">
                                    <h1>TITOLO</h1>
                                    <h1>CLASSIFICA</h1>
                                    <FaClock />
                                </div>
                            </div>
                            <SeparationLine />
                            <div className="grid grid-cols-1 gap-2">
                                {album.tracks.data.map((track) => (
                                    <div className="flex items-center gap-4">
                                        <h1 className="text-gray-500">{album.tracks.data.indexOf(track) + 1}</h1>
                                        <div className="flex justify-between items-center w-full">
                                            <div className="w-28"><Track track={track} isImage={false} /></div>
                                            <h1 className="text-gray-500">{track.rank}</h1>
                                            <h1 className="text-gray-500">{Math.floor(track.duration / 60) + ":" + (track.duration % 60)}</h1>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
        </div>
    )
}

export default AlbumPage