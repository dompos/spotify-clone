import { FaTriangleExclamation } from "react-icons/fa6"
import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <div className="h-screen flex flex-col gap-4 justify-center items-center">
        <FaTriangleExclamation className="text-9xl text-yellow-400"/>
        <h1 className="text-2xl text-black font-bold">La pagina richiesta è inesistente</h1>
        <Link to="/" className="bg-green-600 hover:bg-green-700 border-none rounded-lg text-2xl text-white px-4 py-2">Torna alla home</Link>
        </div>
      )
}

export default PageNotFound