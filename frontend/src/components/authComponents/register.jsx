import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {registerUser} from '../utils/auth.api'

function Register() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
    const [msg, setMsg] = useState("");

     const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg("");

        try {
        await registerUser({ username, email, password, name });
        setMsg("Registered successfully");
        navigate('/home')
        } catch (err) {
            setMsg(
                err?.response?.data?.message || "Something went wrong"
            );
        }
    };





    return (
        <div className="min-h-screen pt-32 bg-gradient-to-br from-[#0f172a] via-[#020617] to-black flex justify-center">
            <form
                className="w-full max-w-md text-amber-50 px-4"
                onSubmit={handleSubmit}
            >

                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="email"
                        className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email address
                    </label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="password"
                        className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Password
                    </label>
                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative z-0 w-full group">
                        <input
                            type="text"
                            id="firstName"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="firstName"
                            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Name
                        </label>
                    </div>

                    <div className="relative z-0 w-full group">
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="username"
                            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Username
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full mt-10 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold text-white"
                >
                    Create Account
                </button>
                    {msg && <p className={`text-sm mt-3
                    ${
                        msg.includes("success")
                        ? "text-green-400"
                        : "text-red-400"
                    }
                text-center`}
                >{msg}</p>}
            </form>
        </div>
    );
}

export default Register;
