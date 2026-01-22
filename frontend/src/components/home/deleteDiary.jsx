import { motion } from "framer-motion";

function DeleteDiary({ onClose, onConfirm, loading = false }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="
          bg-white/20 backdrop-blur-xl
          border border-white/30
          rounded-2xl
          p-6
          text-white
          w-full max-w-sm
        "
      >
        <h3 className="text-lg font-semibold mb-2">
          Delete this note?
        </h3>

        <p className="text-sm text-white/70 mb-6">
          This action cannot be undone.
        </p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="
              flex-1 py-2 rounded
              bg-white/20 hover:bg-white/30
              transition
            "
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="
              flex-1 py-2 rounded
              bg-red-600 hover:bg-red-700
              transition font-medium
            "
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default DeleteDiary;
