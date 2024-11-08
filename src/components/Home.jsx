import { useOutletContext } from "react-router-dom";

const Home = () => {
    const { user } = useOutletContext();

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6">
            <header className="w-full max-w-5xl text-center my-12">
                <h1 className="text-4xl font-extrabold text-teal-400 mb-4">
                    Welcome to Our Gadget Store
                </h1>
                {user ? (
                    <p className="text-lg text-gray-400">
                        Hello, {user.displayName}! Enjoy exploring our store.
                    </p>
                ) : (
                    <p className="text-lg text-gray-400">
                        Discover the latest and greatest gadgets to enhance your
                        digital lifestyle.
                    </p>
                )}
            </header>
        </div>
    );
};

export default Home;
