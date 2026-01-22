import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createDiary } from "../utils/diary.api";

const CreateDiary = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title || !description) {
      setError("Title and description are required");
      return;
    }

    try {
      setLoading(true);
      await createDiary({ title, description });

      navigate("/home");
    } catch (err) {
      setError(
        err?.response?.data?.message || "Failed to create diary"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white px-4">

      <div
        className="
          w-full max-w-md p-6 rounded-2xl
          bg-white/20 backdrop-blur-xl
          border border-white/30
        "
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Diary
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <label className="text-sm text-white/70">Title</label>
          <input
            className="w-full mt-1 mb-4 p-2 rounded
              bg-white/20 border border-white/30
              focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Diary title"
          />

          {/* Description */}
          <label className="text-sm text-white/70">Description</label>
          <textarea
            rows="4"
            className="w-full mt-1 mb-4 p-2 rounded
              bg-white/20 border border-white/30
              focus:outline-none resize-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write your thoughts..."
          />

          {error && (
            <p className="text-sm text-red-400 mb-4">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded
              bg-blue-600 hover:bg-blue-700 transition"
          >
            {loading ? "Creating..." : "Create Diary"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateDiary;
