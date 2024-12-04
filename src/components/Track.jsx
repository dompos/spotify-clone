import { useTrack } from "./TrackContext"
import { Link } from "react-router-dom";


const Track = ({ track, isVertical = false, isAlbum = false, isImage = true, bg }) => {

  const { setTrack, hide, setHide } = useTrack();
  const bgColor = `bg-${bg}`;

  return <>
    {isVertical ? (
      <div className={`flex md:flex-col gap-2 p-4 rounded-md ${bgColor} `} >
        {isAlbum ? (
          <>
            <img src={track.cover_medium} alt="Artista" className="rounded-t-md cursor-pointer" />
            <Link to={`../album/${track.id}`}>
              <h1 className="text-white font-bold text-xs md:text-base">{track.title}</h1>
            </Link>
          </>
        )
          :
          (
            <>
              {isImage ? (
                <img src={track.album.cover_big} alt="Artista" className="rounded-t-md cursor-pointer size-36 md:size-auto" onClick={() => { setTrack(track); hide && setHide(!hide) }} />
              ) : (<></>)}
              <div className="flex flex-col gap-1">
                <h1 className="text-white font-bold cursor-pointer " onClick={() => { setTrack(track); hide && setHide(!hide) }} >{track.title}</h1>
                <Link to={`../artist/${track.artist.id}`}><h1 className="text-gray-500 text-[10px] md:text-xs">{track.artist.name}</h1></Link>
              </div>
            </>
          )}
      </div >
    )
      :
      (
        <div className={`flex gap-2 rounded-md ${bgColor}`} >
          {isAlbum ? (
            <div className="flex items-center gap-4">
              <img src={track.cover_small} alt="Artista" className="rounded-t-md" />
              <Link to={`../album/${track.id}`}>
                <h1 className="text-white font-bold text-xs md:text-base">{track.title}</h1>
              </Link>
            </div>
          )
            :
            (
              <>
                {isImage ? (
                  <img src={track.album.cover_small} alt="Artista" className="rounded-t-md cursor-pointer" onClick={() => { setTrack(track); hide && setHide(!hide) }} />
                ) : (<></>)}
                <div className="flex flex-col gap-1">
                  <h1 className="text-white font-bold cursor-pointer text-xs md:text-base" onClick={() => { setTrack(track); hide && setHide(!hide) }} >{track.title}</h1>
                  <Link to={`../artist/${track.artist.id}`}><h1 className="text-gray-500 text-[10px] md:text-xs">{track.artist.name}</h1></Link>
                </div>
              </>
            )}
        </div >
      )
    }
  </>
}

export default Track