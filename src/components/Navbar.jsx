import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-teal-400">
                    Gadget Heaven
                </div>

                {/* Nav Links */}
                <div className="space-x-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-white text-lg font-medium ${
                                isActive
                                    ? "border-b-2 border-teal-400"
                                    : "hover:text-teal-400"
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            `text-white text-lg font-medium ${
                                isActive
                                    ? "border-b-2 border-teal-400"
                                    : "hover:text-teal-400"
                            }`
                        }
                    >
                        Login
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
