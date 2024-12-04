import ActionBar from "./ActionBar"
import NavBar from "./NavBar"
import PlaylistListing from "./PlaylistListing"
import SeparationLine from "./SeparationLine"


const LeftSideBar = () => {
    return (
        <div className="pl-3 pt-3">
            <NavBar />
            <ActionBar />
            <SeparationLine margin={4} />
            <PlaylistListing />
        </div>
    )
}

export default LeftSideBar