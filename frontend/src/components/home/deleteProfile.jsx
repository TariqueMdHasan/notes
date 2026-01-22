import { motion } from "framer-motion";
import { deleteUser } from "../utils/auth.api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DeleteConfirm = ({ onClose }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleDelete = async () => {
    try {
      await deleteUser(password);
      navigate("/login");
    } catch (err) {
      setError(
        err?.response?.data?.message || "Delete failed"
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="
          w-full max-w-sm p-6 rounded-2xl
          bg-white/20 backdrop-blur-xl
          border border-red-400 text-white
        "
      >
        <h3 className="text-xl font-bold text-red-400 mb-3">
          Delete Account?
        </h3>

        <p className="text-sm text-white/70 mb-6">
          This action is permanent and cannot be undone.
        </p>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full mb-3 px-3 py-2 rounded bg-black/40 border border-white/20 outline-none"
        />

        {error && (
          <p className="text-sm text-red-400 mb-3">{error}</p>
        )}

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded bg-white/20 hover:bg-white/30"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="flex-1 py-2 rounded bg-red-600 hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default DeleteConfirm;
