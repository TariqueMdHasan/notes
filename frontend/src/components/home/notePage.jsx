import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getSingleNote, deleteDiary, updateDiary } from "../utils/diary.api";
import DeleteDiary from "./deleteDiary";
import UpdateDiary from "./updateDiary";

const NotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showDelete, setShowDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [showEdit, setShowEdit] = useState(false);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    getSingleNote(id)
      .then((res) => setNote(res.data.note))
      .catch(() => navigate("/home"))
      .finally(() => setLoading(false));
  }, [id, navigate]);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      await deleteDiary(note._id);
      navigate("/home");
    } catch (err) {
      console.error(err);
    } finally {
      setDeleting(false);
    }
  };

  const handleUpdate = async (data) => {
    try {
      setUpdating(true);
      const res = await updateDiary(note._id, data);
      setNote(res.data.noteUpdate); 
      setShowEdit(false);
    } catch (err) {
      console.error(err);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white/70">
        Loading note…
      </div>
    );
  }

  if (!note) return null;

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-[#0f172a] via-[#020617] to-black flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          w-80 lg:w-9/12
          bg-white/15 backdrop-blur-xl
          border border-white/25
          rounded-3xl
          p-8
          text-white
          shadow-2xl
          h-auto
        "
      >
        <h1 className="text-3xl font-bold mb-2">{note.title}</h1>

        <p className="text-xs text-white/60 mb-6">
          {new Date(note.createdAt).toLocaleString()}
        </p>

        <div className="h-px bg-white/20 mb-6" />

        <article className="text-white/90 whitespace-pre-line text-sm leading-relaxed">
          {note.description}
        </article>

        <div className="mt-10 flex gap-4">
          <button
            onClick={() => setShowEdit(true)}
            className="
              flex-1 py-2 rounded-lg
              bg-white/15 hover:bg-white/25
              border border-white/25
              transition text-sm font-medium
            "
          >
            Edit Note
          </button>

          <button
            onClick={() => setShowDelete(true)}
            className="
              flex-1 py-2 rounded-lg
              border border-red-400/40
              text-red-300
              hover:bg-red-500/15
              transition text-sm font-medium
            "
          >
            Delete Note
          </button>
        </div>
      </motion.div>

      {showDelete && (
        <DeleteDiary
          onClose={() => setShowDelete(false)}
          onConfirm={handleDelete}
          loading={deleting}
        />
      )}

      {showEdit && (
        <UpdateDiary
          diary={note}
          loading={updating}
          onClose={() => setShowEdit(false)}
          onSave={handleUpdate}
        />
      )}
    </div>
  );
};

export default NotePage;
