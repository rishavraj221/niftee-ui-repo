export default function captureVideoFrame(video, format, quality) {
  if (typeof video === "string") {
    video = document.getElementById(video);
  }

  format = format || "jpeg";
  quality = quality || 0.13;

  if (!video || (format !== "png" && format !== "jpeg")) {
    return false;
  }

  var canvas = document.createElement("CANVAS");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  canvas.getContext("2d").drawImage(video, 0, 0);

  var dataUri = canvas.toDataURL("image/" + format, quality);
  var jpegContent = canvas
    .toDataURL("image/jpeg")
    .replace(/^data:image\/jpeg;base64,/, "");

  var data = dataUri.split(",")[1];
  var mimeType = dataUri.split(";")[0].slice(5);

  var blob = new Blob([dataUri], { type: mimeType });

  var bytes = window.atob(data);
  var buf = new ArrayBuffer(bytes.length);
  var arr = new Uint8Array(buf);

  for (var i = 0; i < bytes.length; i++) {
    arr[i] = bytes.charCodeAt(i);
  }

  return {
    dataUri: jpegContent,
    rdataUri: dataUri,
    format: format,
    data: jpegContent,
    blob,
  };
}
