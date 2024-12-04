import { createContext, useState, useContext } from "react"

const PlayerTrackContext = createContext();

export const TrackContext = ({ children }) => {

    const [track, setTrack] = useState();
    const [hide, setHide] = useState(true);

  return (
    <PlayerTrackContext.Provider value={{track, setTrack, hide, setHide}}>
        { children }
    </PlayerTrackContext.Provider>
  );
};

export const useTrack = () => useContext(PlayerTrackContext);

