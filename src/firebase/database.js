import { ref, get } from "firebase/database";
import { database } from "../firebase/config.js";

export const fetchPsychologists = async () => {
  const rootRef = ref(database);
  const snapshot = await get(rootRef);

  const data = snapshot.val();

  if (Array.isArray(data)) {
    return data;
  }
  if (Array.isArray(data.psychologists)) {
    return data.psychologists;
  }
  if (data.psychologists && typeof data.psychologists === "object") {
    return Object.values(data.psychologists);
  }
  return [];
};
