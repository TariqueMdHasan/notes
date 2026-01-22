import { useEffect, useState } from "react";
import { motion, AnimatePresence  } from "framer-motion";
import { getAllDiaries, deleteDiary, updateDiary } from "../utils/diary.api";
import DeleteDiary from "./deleteDiary";
import { useNavigate } from "react-router-dom";
import EditDiaryModal from "./updateDiary";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const DiaryList = () => {
  const navigate = useNavigate()
  const [diaries, setDiaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDelete, setShowDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [selectedDiaryId, setSelectedDiaryId] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [editingDiary, setEditingDiary] = useState(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    getAllDiaries()
      .then((res) => {
        setDiaries(res.data.notes || []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async () => {

      if (!selectedDiaryId) {
        console.error("No diary id selected");
        return;
      }
      try {
          setDeleting(true);
          await deleteDiary(selectedDiaryId);

          setDiaries((prev) =>
            prev.filter((d) => d._id !== selectedDiaryId)
          );

          setShowDelete(false);
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

          const res = await updateDiary(editingDiary._id, data);

          setDiaries((prev) =>
            prev.map((d) =>
              d._id === editingDiary._id ? res.data.noteUpdate : d
            )
          );

          setShowEdit(false);
          setEditingDiary(null);
        } catch (err) {
          console.error(err);
        } finally {
          setUpdating(false);
        }
      };


  if (loading) {
    return (
      <p className="text-white/70 mt-10 text-center">
        Loading your thoughts…
      </p>
    );
  }

  if (diaries.length === 0) {
    return (
      <p className="text-white/70 mt-10 text-center">
        No diary entries yet ✍️
      </p>
    );
  }

  return (
    <div className="w-full lg:w-11/12 mt-10 mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <AnimatePresence>
      {diaries.map((diary, i) => (
        <motion.div

          key={diary._id}
          layout
          custom={i}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit={{
            opacity: 0,
            scale: 0.9,
            y: 20,
            transition: { duration: 0.25 }
          }}
          whileHover={{ y: -6, scale: 1.02 }}

          className="
            bg-white/20 backdrop-blur-xl
            border border-white/30
            rounded-2xl p-5
            text-white
            shadow-lg
            flex flex-col
            h-[22rem]
          "
        >
          <h3 className="text-lg font-semibold mb-2 leading-snug">
            {diary.title.length > 50
              ? diary.title.slice(0, 50) + "…"
              : diary.title}
          </h3>
          <p className="text-[10px]">
            {new Date(diary.createdAt).toDateString()}
          </p>


          
          <p className="text-sm text-white/80 text-[13px] leading-relaxed">
            {diary.description.length > 220
              ? (
                <>
                  {diary.description.slice(0, 220)}…
                  <span
                    onClick={() => navigate(`/note/${diary._id}`)}
                    className="
                      ml-1 cursor-pointer
                      text-blue-300 hover:text-blue-400
                      font-medium
                    "
                  >
                    Read more →
                  </span>
                </>
              )
              : (
                <>
                  {diary.description}...
                  <span
                    onClick={() => navigate(`/note/${diary._id}`)}
                    className="
                      ml-1 cursor-pointer
                      text-blue-300 hover:text-blue-400
                      font-medium
                    "
                  >
                    Read more →
                  </span>
                </>
                
              )}
          </p>


          
          <div className="mt-auto flex gap-3 pt-4">
            <button
              className="
                flex-1 py-2 rounded-lg
                bg-white/15
                border border-white/25
                text-white/90
                hover:bg-white/25
                transition-all duration-200
                text-sm font-medium
              "
               onClick={() => {
                setEditingDiary(diary);
                setShowEdit(true);
              }}
            >
              Edit
            </button>

            <button
              onClick={() =>{ 
                setShowDelete(true)
                setSelectedDiaryId(diary._id);
              }}
              
              className="
                flex-1 py-2 rounded-lg
                border border-red-400/40
                text-red-300
                hover:bg-red-500/15
                hover:text-red-200
                transition-all duration-200
                text-sm font-medium
              "
            >
              Delete
            </button>
          </div>

        </motion.div>
      ))}
      </AnimatePresence>

      {showDelete && (
        <DeleteDiary
            onClose={() => setShowDelete(false)}
            onConfirm={handleDelete}
            loading={deleting}
        />
      )}
      {showEdit && editingDiary && (
        <EditDiaryModal
          diary={editingDiary}
          loading={updating}
          onClose={() => setShowEdit(false)}
          onSave={handleUpdate}
        />
      )}

    </div>
  );
};

export default DiaryList;
