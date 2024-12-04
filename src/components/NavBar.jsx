import { FaEllipsis, FaHouse, FaMagnifyingGlass, FaBook } from "react-icons/fa6"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    const activeColor = ({ isActive }) =>
        isActive
            ? 'flex flex-col md:flex-row items-center gap-0 md:gap-2 text-white text-lg md:text-2xl font-bold'
            : 'flex flex-col md:flex-row items-center gap-0 md:gap-2 text-gray-400 text-lg md:text-2xl font-bold';

    return (
        <div className="flex md:flex-col gap-16 md:gap-4">
            <FaEllipsis className="hidden md:block text-gray-400 text-2xl font-bold" />
            <NavLink to={'/'} className={activeColor}>
                <FaHouse />
                <h1 className="text-[10px] md:text-sm">Home</h1>
            </NavLink>
            <NavLink to={'/search'} className={activeColor}>
                <FaMagnifyingGlass />
                <h1 className="text-[10px] md:text-sm">Cerca</h1>
            </NavLink>
            <NavLink to={'/library'} className={activeColor}>
                <FaBook />
                <h1 className="text-[10px] md:text-sm">La tua libreria</h1>
            </NavLink>
        </div>
    )
}

export default NavBar