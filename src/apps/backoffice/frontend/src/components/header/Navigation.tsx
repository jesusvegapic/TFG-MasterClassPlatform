import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-900 p-5">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <NavLink to="/">
                Aletheia
            </NavLink>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <NavLink to="/videos" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    Vídeos
                </NavLink>
            </div>
        </div>
    </nav>
  );
}

export default Navigation;