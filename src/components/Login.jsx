import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useOutletContext, useNavigate } from "react-router-dom";
/* eslint-disable react/no-unescaped-entities */
const Login = () => {
    const { setUser } = useOutletContext();
    const navigate = useNavigate();

    const provider = new GoogleAuthProvider();

    const signInGoogle = () => {
        console.log("hello!");
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
                navigate("/");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const signInFacebook = () => {
        console.log("hello!");
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-white mb-6">
                    Welcome Back!
                </h1>
                <p className="text-gray-400 text-center mb-6">
                    Sign in to access your account
                </p>

                {/* Google Login Button */}
                <button
                    onClick={signInGoogle} // Firebase Google sign-in function
                    className="flex items-center justify-center w-full p-3 mb-4 text-white bg-red-500 rounded-full hover:bg-red-600"
                >
                    Sign in with Google
                </button>

                {/* Facebook Login Button */}
                <button
                    onClick={signInFacebook} // Firebase Facebook sign-in function
                    className="flex items-center justify-center w-full p-3 mb-4 text-white bg-blue-600 rounded-full hover:bg-blue-700"
                >
                    Sign in with Facebook
                </button>

                <div className="flex items-center justify-center mt-6">
                    <p className="text-gray-400">
                        Don't have an account?{" "}
                        <a
                            href="/signup"
                            className="text-purple-400 hover:underline"
                        >
                            Sign up here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
