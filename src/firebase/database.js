import { ref, get } from "firebase/database";
import { database } from "../firebase/config.js";

export const fetchData = async () => {
  const dataRef = ref(database);
  const snapshot = await get(dataRef);

  if (snapshot.exists()) {
    return [];
  }
  const data = snapshot.val();

  if (Array.isArray(data)) {
    return data;
  }
  if (Array.isArray(data.psichologists)) {
    return data.psichologists;
  }
  if (data.psichologists && typeof data.psichologists === "object") {
    return Object.values(data.psichologists);
  }
  return [];
};
