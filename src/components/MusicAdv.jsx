import { FaEllipsis } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { searchFetchRandom } from '../utils/Fetch';
import { useTrack } from './TrackContext';
import { Link } from 'react-router-dom';


const MusicAdv = () => {
    const [artist, setArtist] = useState([]);
    const { setTrack, hide, setHide } = useTrack();
    const [loading, setLoading] = useState(true);
    const artistName = 'pinguinitatticinucleari';


    useEffect(() => {
        const fetchTrack = async () => {
            try {
                const result = await searchFetchRandom(artistName);
                setArtist(result);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchTrack();
    }, [])

    return (
        <div className="hidden md:flex justify-between items-start bg-gradient-to-tr from-black via-black/30 to-black/5 rounded-md p-2">
            <div className='flex gap-4 p-2'>
                {loading ? (<h1>Loading...</h1>)
                    :
                    (
                        <>
                            <img src={artist.album.cover} alt="Copertina" />
                            <div className='flex flex-col text-nowrap gap-2'>
                                <h2 className='text-white font-bold text-xs'>ALBUM</h2>
                                <h1 className='text-white font-bold text-4xl'>{artist.title}</h1>
                                <Link to={`artist/${artist.artist.id}`}><h2 className='text-white text-xs'>{artist.artist.name}</h2></Link>
                                <p className='text-white text-xs'>Ascolta {artist.title} di {artist.artist.name}!</p>
                                <div className='flex gap-3 items-center bg-transparent'>
                                    <button onClick={() => { setTrack(artist); hide && setHide(!hide) }} className='bg-green-500 rounded-full py-2 px-6 text-black text-xs font-bold'>Play</button>
                                    <button className='bg-transparent rounded-full py-2 px-6 text-white font-bold ring-1 ring-white text-xs'>Salva</button>
                                    <FaEllipsis className='text-gray-500/50 text-xl' />
                                </div>
                            </div>
                        </>
                    )}
            </div>
            <button className='text-gray-500/30 text-xs font-bold bg-gray-500/5 rounded-md py-1 px-2'>NASCONDI ANNUNCI</button>
        </div>
    )
}

export default MusicAdv