import api from "./http";
import { apiEndPoint } from "../config.json";

// const nodeEndPoint = "http://localhost:5000/api/v1/demo";
const nodeEndPoint = "http://34.194.50.167:5000/api/v1/demo";

export function uploadFrame(session_id, fpsCounter, blob) {
  let formData = new FormData();
  formData.append("file", blob);
  formData.append("session", session_id);
  formData.append("counter", fpsCounter);

  return api.post(`${apiEndPoint}/upload_frame`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export function uploadText(filename, counter, text) {
  return api.post(`${apiEndPoint}/getTranscribeTextScore`, {
    sessionId: filename,
    counter,
    text,
  });
}

export function getScore(filename, start, end) {
  return api.get(
    `${apiEndPoint}/calculate_score?session=${filename}&start=${start}&end=${end}`
  );
}

export function getUploadedFramesCount(session_id) {
  return api.get(`${apiEndPoint}/uploaded_frames_count?session=${session_id}`);
}

export function uploadVideo(video, session_id, uploadProgress) {
  let formData = new FormData();
  formData.append("file", video);

  console.log(video);

  return api.post(`${nodeEndPoint}/upload?session_id=` + session_id, formData, {
    onUploadProgress: uploadProgress,
  });
}

export function getCaption(session_id, count) {
  return api.get(
    `${nodeEndPoint}/caption?session_id=` + session_id + "&count=" + count
  );
}

export function getTranscribeTextScore(session_id, count) {
  return api.get(
    `${nodeEndPoint}/transcribe_score?session_id=` +
      session_id +
      "&count=" +
      count
  );
}

export function getTextScore(transcript) {
  return api.post(
    "http://54.160.96.123/v1/api/audio_score",
    {
      data: transcript,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
