import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { artistFetch, searchFetch } from "../utils/Fetch";
import Track from "../components/Track";

const ArtistPage = () => {

    const { id } = useParams();
    const [artist, setArtist] = useState();
    const [albums, setAlbums] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const updateArtist = async () => {
            try {
                const result = await artistFetch(id);
                setArtist(result);
                if (result && result.name) {
                    try {
                        const searchResult = await searchFetch(result.name);
                        let albumArray = [];

                        searchResult.forEach((track) => {
                            if (track.artist.name === result.name) {
                                albumArray.push(track.album);
                            }
                        });

                        albumArray = [...new Map(albumArray.map(album => [album.id, album])).values()];
                        setAlbums(albumArray);
                    } catch (error) {
                        console.log("Error fetching search results:", error);
                    }
                } else {
                    console.log("Artist data is incomplete or missing");
                }
            } catch (error) {
                console.log("Error fetching artist:", error);
            } finally {
                setLoading(false);
            }
        };

        updateArtist();

    }, [])

    return (
        <>
            {loading ?
                (<h1 className="text-white text-5xl">Loading...</h1>)
                :
                (
                    <div className="flex flex-col bg-[#191919] overflow-y-scroll h-screen">
                        <div className="min-h-96 bg-cover bg-center flex flex-col justify-end gap-8 p-6" style={{ backgroundImage: `url(${artist.picture_xl})` }}>
                            <h1 className="text-white text-5xl md:text-6xl font-bold">{artist.name}</h1>
                            <h1 className="text-white text-xs md:text-base font-semibold">{artist.link}</h1>
                        </div>
                        <div className="h-full p-6">
                            <h1 className="text-white text-2xl font-bold">Album</h1>
                            <div className="grid grid-cols-1">
                                {albums.map((album) => (
                                    <div className="flex items-center gap-6 p-4">
                                        <h1 className="text-gray-500 text-xl">{albums.indexOf(album) + 1}</h1>
                                        <Track track={album} isAlbum={true}  />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
        </>
    )
}

export default ArtistPage