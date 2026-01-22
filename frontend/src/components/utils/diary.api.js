import api from "./api";

export const createDiary = (data) =>
  api.post("/diary/createDiary", data);

export const updateDiary = (id, data) =>
  api.put(`/diary/updateNote/${id}`, data);

export const deleteDiary = (id) =>
  api.delete(`/diary/delete/${id}`);

export const getAllDiaries = () =>
  api.get("/diary/getNotes");

export const getSingleNote = (id) =>
  api.get(`/diary/getNote/${id}`)
