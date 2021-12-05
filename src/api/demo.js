import api from "./http";
import { apiEndPoint } from "../config.json";

export function uploadFrame(filename, fpsCounter, blob) {
  let formData = new FormData();
  formData.append("file", blob);
  formData.append("counter", fpsCounter);
  formData.append("session", filename);

  return api.post(`${apiEndPoint}/processData`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export function uploadText(filename, counter, text) {
  return api.get(
    `${apiEndPoint}/getTranscribeTextScore?sessionId=${filename}&counter=${counter}&text=${text}`
  );
}

export function getScore(filename) {
  return api.get(`${apiEndPoint}/score?filename=${filename}`);
}
