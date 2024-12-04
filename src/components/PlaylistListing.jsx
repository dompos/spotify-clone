

const PlaylistListing = () => {
    let playlistName = [];
    for(let i = 0; i < 30; i++){
        playlistName.push('La mia playlist numero ' + i);
    }

  return (
    <div className="flex flex-col gap-2 overflow-y-scroll max-h-96">
        {playlistName.map((name) => (
            <h1 key={playlistName.indexOf(name)} className="text-sm font-semibold text-wrap text-gray-400">{name}</h1>
        )
        )}
    </div>
  )
}

export default PlaylistListing