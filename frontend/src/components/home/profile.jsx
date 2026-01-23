import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getUserData } from "../utils/auth.api";
import UpdateProfileForm from "./updateProfileForm";
import DeleteConfirm from "./deleteProfile";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    useEffect(() => {
        getUserData()
            .then((res) => {
                // console.log(res.data.user);
                setUser(res.data.user)
            })
            .catch((err) => console.error(err));
    }, []);

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                Loading profile...
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 flex justify-center bg-gradient-to-br from-[#0f172a] via-[#020617] to-black">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`
                    w-80 lg:w-full lg:max-w-md
                    bg-white/20 backdrop-blur-xl
                    border border-white/30
                    rounded-3xl
                    shadow-2xl
                    p-8
                    text-white
                    mb-30`}

            >
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-3xl font-bold shadow-lg">
                        {user.username?.charAt(0).toUpperCase()}
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-center">
                    {user.name}
                </h2>

                <p className="text-center text-white/70 mt-1">
                    {user.username}
                </p>

                <div className="h-px bg-white/20 my-6" />

                <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                        <span className="text-white/60">Name</span>
                        <span className="font-medium">{user.name}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-white/60">Username</span>
                        <span className="font-medium">{user.username}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-white/60">Email</span>
                        <span className="font-medium">{user.email}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-white/60">Account</span>
                        <span className="font-medium text-green-400">
                            Active
                        </span>
                    </div>
                </div>

                <div className="mt-8 flex gap-4">
                    <button
                        onClick={() => setShowEdit(true)}
                        className="
                            flex-1 py-2 rounded-lg
                            bg-white/20 hover:bg-white/30
                            transition font-medium
                            "
                    >
                        Edit Profile
                    </button>

                    <button
                        onClick={() => setShowDelete(true)}
                        className="
                            flex-1 py-2 rounded-lg
                            bg-red-500/80 hover:bg-red-600
                            transition font-medium
                            "
                    >
                        Delete Account
                    </button>



                </div>
                {showEdit && (
                    <UpdateProfileForm
                        user={user}
                        onClose={() => setShowEdit(false)}
                        onUpdated={(u) => setUser(u)}
                    />
                )}




                {showDelete && (
                    <DeleteConfirm onClose={() => setShowDelete(false)} />
                )}
            </motion.div>
        </div>
    );
};

export default Profile;
