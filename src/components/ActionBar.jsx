import { FaPlus, FaHeart, FaBookmark } from "react-icons/fa6"

const ActionBar = () => {
  return (
    <div className="flex flex-col gap-4 mt-10">
    <button className="flex items-center gap-2">
    <FaPlus className="bg-gray-400 rounded-sm p-1 text-2xl text-gray-700 font-bold" />
    <h1 className="text-gray-400 text-sm font-bold">Crea la tua playlist</h1>
    </button>
    <button className="flex items-center gap-2">
    <FaHeart className="bg-gradient-to-br from-violet-700 to-violet-100 rounded-sm p-1 text-2xl text-gray-400 font-bold" />
    <h1 className="text-gray-400 text-sm font-bold">Brani che ti piacciono</h1>
    </button>
    <button className="flex items-center gap-2">
    <FaBookmark className="bg-green-800 rounded-sm p-1 text-2xl text-green-600 font-bold" />
    <h1 className="text-gray-400 text-sm font-bold">I tuoi episodi</h1>
    </button>
    </div>
  )
}

export default ActionBar