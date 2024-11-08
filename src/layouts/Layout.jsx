import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const [user, setUser] = useState(null);
    return (
        <div>
            <Navbar />
            <Header />
            <Outlet context={{ user, setUser }} />
        </div>
    );
};

export default Layout;
