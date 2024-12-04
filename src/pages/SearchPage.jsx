import { useEffect, useState } from "react"
import { FaMagnifyingGlass } from "react-icons/fa6"
import { searchFetch } from "../utils/Fetch";
import Track from "../components/Track";


const SearchPage = () => {

    const [hide, setHide] = useState(true);
    const [value, setValue] = useState('');
    const [tracks, setTracks] = useState();
    const [loading, setLoading] = useState(true);
    const hResult = hide ? 'invisible' : 'visible';

    const handleOnchange = (event) => {
        setValue(event.target.value);
    }

    const searchTracks = async () => {
        if (!value) return;
        try {
            const result = await searchFetch(value);
            setTracks(result);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="flex flex-col justify-start gap-8 bg-[#191919] md:bg-gradient-to-b from-green-500 to-[#191919] to-60% overflow-y-scroll h-screen p-4 md:p-0">
                <h1 className="text-white font-bold text-3xl md:hidden">Cerca</h1>
                <div className="mx-auto flex items-center gap-2 w-max bg-[#2d2d2d] shadow-lg shadow-black md:mt-6 p-2">
                    <FaMagnifyingGlass className="text-white cursor-pointer" onClick={() => { !hide && setHide(!hide); searchTracks() }} />
                    <input type="text" className="w-96 bg-transparent outline-none text-white" value={value} onChange={handleOnchange} placeholder="Cosa vuoi ascoltare?" />
                </div>
                {loading ? (<h1 className={`text-white text-5xl ${hResult}`}>Loading...</h1>)
                    : (
                        <div className={`grid grid-cols-1 gap-8 p-6`}>
                            {tracks.map((track) => (
                                <Track key={tracks.indexOf(track)} track={track} />
                            ))}
                        </div>
                    )}
            </div>
        </>
    )
}

export default SearchPage