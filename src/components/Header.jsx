const Header = () => {
    return (
        <header className="bg-gray-900 h-64 text-center flex items-center justify-center">
            <div className="p-8 rounded-lg shadow-lg bg-gray-800 bg-opacity-90">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Introducing React with Firebase!
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mt-2">
                    Build scalable web applications with modern technology
                </p>
            </div>
        </header>
    );
};

export default Header;
