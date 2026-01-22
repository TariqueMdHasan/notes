import { motion } from "framer-motion";
import { useState } from "react";

const EditDiaryModal = ({ diary, onClose, onSave, loading }) => {
  const [title, setTitle] = useState(diary.title);
  const [description, setDescription] = useState(diary.description);

  const handleSubmit = () => {
    if (!title.trim() && !description.trim()) return;
    onSave({ title, description });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="
          w-full max-w-lg
          bg-white/20 backdrop-blur-xl
          border border-white/30
          rounded-2xl
          p-6
          text-white
        "
      >
        <h3 className="text-lg font-semibold mb-4">Edit Note</h3>

        <label className="text-xs text-white/70">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="
            w-full mt-1 mb-4 p-2 rounded
            bg-white/20 border border-white/30
            focus:outline-none
          "
        />

        <label className="text-xs text-white/70">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={6}
          className="
            w-full mt-1 mb-6 p-2 rounded
            bg-white/20 border border-white/30
            resize-none
            focus:outline-none
          "
        />

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded bg-white/20 hover:bg-white/30"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="
              flex-1 py-2 rounded
              bg-blue-600 hover:bg-blue-700
            "
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EditDiaryModal;
