import { BiSolidContact } from "react-icons/bi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import LogoDesarrolloCap from "../assets/images/logo.png"

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1D61AD" }} className="p-4 text-center text-sm text-gray-600">
      <div className="flex items-center justify-between">
        <div className="w-1/3 ml-0">
     <img src={LogoDesarrolloCap} alt="Logo DesarrolloCap" className="mx-auto w-16" />
     </div>
 <div className="w-1/3 text-center text-white fw-bold ml-0">
      <p className="text-right flex items-center justify-center gap-2 text-m"> <BiSolidContact /> Contacto |<a href="https://www.facebook.com/desarrollocapltda" target="_blank" rel="noopener noreferrer"></a> <FaFacebook className="hover:text-blue-300 transition-colors duration-200"/> <a href="https://www.instagram.com/desarrollocapltda2025/" target="_blank" rel="noopener noreferrer"></a><FaInstagram /> | Quiénes somos</p>
      </div>
      <div className="w-1/3"></div>
  </div>
    </footer>
  );
}
