import { motion } from "framer-motion";
import { useState } from "react";
import { updateUser } from "../utils/auth.api";

const UpdateProfileForm = ({ user, onClose, onUpdated }) => {
  const [name, setName] = useState(user.name || "");
  const [username, setUsername] = useState(user.username || "");
  const [email, setEmail] = useState(user.email || "");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);
    try {
        const payload = {
            username,
            name,
            email,
        };

        if (password && password.trim().length > 0) {
            payload.password = password;
        }

        const res = await updateUser(payload);

        onUpdated(res.data.user);
        onClose();
    } catch (err) {
      alert(err?.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="
          w-80 lg:w-full lg:max-w-md p-6 rounded-2xl
          bg-white/20 backdrop-blur-xl
          border border-white/30 text-white
        "
      >
        <h3 className="text-xl font-bold mb-6 text-center">
          Edit Profile
        </h3>

        <label className="text-sm text-white/70">Name</label>
        <input
          className="w-full mb-4 mt-1 p-2 rounded bg-white/20 border border-white/30 focus:outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="text-sm text-white/70">Username</label>
        <input
          className="w-full mb-4 mt-1 p-2 rounded bg-white/20 border border-white/30 focus:outline-none"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="text-sm text-white/70">Email</label>
        <input
          type="email"
          className="w-full mb-4 mt-1 p-2 rounded bg-white/20 border border-white/30 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="text-sm text-white/70">
          New Password <span className="text-xs">(optional)</span>
        </label>
        <input
          type="password"
          className="w-full mb-6 mt-1 p-2 rounded bg-white/20 border border-white/30 focus:outline-none"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded bg-white/20 hover:bg-white/30 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleUpdate}
            disabled={loading}
            className="flex-1 py-2 rounded bg-blue-600 hover:bg-blue-700 transition"
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default UpdateProfileForm;
