import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between'>
            <div className="flex flex-shrink-0 items-center">
                <a href="/" className="px-2 text-2xl font-medium text-white">humamafif</a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
                <FaLinkedin />
                <FaGithub />
                <FaInstagram />
            </div>
        </nav>
    )
}
