import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import Modal from "@mui/material/Modal";
import Lottie from "react-lottie";

import AudioTranscribe from "./AudioTranscript/audio";
import AudioNode from "./AudioTranscript/audio_node";
import VideoFramesSection from "./video-frames-section";
import useInterval from "../hooks/useInterval";
import Icon from "../assets/Icons";
import { uploadVideo } from "../api/demo";
import { secondsToTime } from "../utils/frequent";
import uploadAnimation from "../assets/animations/uploading.json";
import processAnimation from "../assets/animations/processing.json";
import "./player.css";

const defaultOptionsAnimation = (animationData) => {
  return {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
};

const delay = (n) => {
  return new Promise((resolve) => {
    setTimeout(resolve, n * 1000);
  });
};

const repeatSessionMessage =
  "It seems you are already in a session, to start a new session please refresh the window";

const PlayerComponent = ({
  client,
  session_id,
  getPlayStatus,
  uploadedFrames,
  setUploadedFrames,
  generatedFrames,
  setGeneratedFrames,
  getTimeInSeconds,
  setTranscribeText,
  getTranscribeArr,
  getVideoOrCamera,
}) => {
  const [play, setPlay] = useState(false);
  const [playPauseBtn, setPlayPauseBtn] = useState(true);
  const [videoOrCamera, setVideoOrCamera] = useState(null);

  const [timeInSeconds, setTimeInSeconds] = useState(0);

  const [localVideoURL, setLocalVideoURL] = useState(null);
  const [localVideoPlayer, setLocalVideoPlayer] = useState(null);
  const [localAudioStream, setLocalAudioStream] = useState(null);
  const [videoLength, setVideoLength] = useState(null);

  const [videoStream, setVideoStream] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);

  const [progressPercent, setProgressPercent] = useState(0);
  const [processCount, setProcessCount] = useState(0);

  const videoRef = useRef(null);
  const inputFile = useRef(null); // for local video file

  useInterval(() => {
    if (play && videoOrCamera) setTimeInSeconds(timeInSeconds + 1);
  }, 1000);

  useEffect(() => {
    if (typeof getTimeInSeconds === "function") getTimeInSeconds(timeInSeconds);
  }, [timeInSeconds, getTimeInSeconds]);

  useEffect(() => {
    if (typeof getPlayStatus === "function") getPlayStatus(play);
  }, [play, getPlayStatus]);

  useEffect(() => {
    if (typeof getVideoOrCamera === "function") getVideoOrCamera(videoOrCamera);
  }, [videoOrCamera]);

  const playCameraVideo = async () => {
    if (!window.navigator.mediaDevices)
      return alert(
        "Camera not accessible, please give required access and try again..."
      );

    const localVideoStream = await window.navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    setVideoStream(localVideoStream);

    try {
      videoRef.current.srcObject = localVideoStream;
      videoRef.current.play();
    } catch (error) {
      console.log(error);
    }

    setPlay(true);
  };

  return (
    <div style={{ width: "100%" }}>
      <Modal open={modalOpen} onClose={() => {}}>
        <div className="modal-container">
          <Lottie
            options={
              progressPercent < 1
                ? defaultOptionsAnimation(uploadAnimation)
                : defaultOptionsAnimation(processAnimation)
            }
            height={150}
            width={150}
          />
          <div className="modal-h1">
            {progressPercent < 1
              ? `Uploading Video (${Math.floor(progressPercent * 100)}%)`
              : `Processing video (${Math.floor((processCount / 30) * 100)}%)`}
          </div>
        </div>
      </Modal>
      <div className="video-controls-container">
        <div
          className="play-icon"
          onClick={() => {
            if (videoOrCamera === "camera") {
              if (play) {
                videoRef.current.pause();
                videoStream.getTracks().forEach((track) => track.stop());
                setPlay(false);
              } else {
                playCameraVideo();
              }
            } else if (videoOrCamera === "video") {
              if (play) setPlay(false);
              else {
                const audStr = new MediaStream(
                  localVideoPlayer
                    .getInternalPlayer()
                    .captureStream()
                    .getAudioTracks()
                );
                setLocalAudioStream(audStr);
                setPlay(true);
              }
            }
          }}
        >
          {playPauseBtn &&
            (play && videoOrCamera ? (
              <Icon name="vimeopause" size="40" />
            ) : (
              <Icon name="vimeoplay" size="40" />
            ))}
        </div>
        <div className="timer-text">
          {secondsToTime(timeInSeconds).h +
            ":" +
            secondsToTime(timeInSeconds).m +
            ":" +
            secondsToTime(timeInSeconds).s}
        </div>
        <div className="icons-cont">
          {videoOrCamera !== "video" ? (
            <div
              className="play-icon"
              onClick={() => {
                if (!videoOrCamera) {
                  playCameraVideo();
                  setVideoOrCamera("camera");
                } else {
                  if (play) {
                    videoRef.current.pause();
                    videoStream.getTracks().forEach((track) => track.stop());
                    setPlay(false);
                  } else {
                    playCameraVideo();
                  }
                }
              }}
            >
              <Icon
                name="video"
                color={
                  videoOrCamera === "camera" && play ? "#0AC720" : "#C3CAD9"
                }
              />
            </div>
          ) : (
            <div style={{ width: 20, height: 2 }}></div>
          )}
          {!videoOrCamera && (
            <div
              className="play-icon"
              style={{ marginLeft: 22 }}
              onClick={() => {
                if (videoOrCamera) return alert(repeatSessionMessage);
                setVideoOrCamera("video");
                inputFile.current.click();
              }}
            >
              <Icon name="upload" />
            </div>
          )}
        </div>
      </div>
      <div className="video-player">
        {videoOrCamera === "video" ? (
          <ReactPlayer
            playing={play}
            ref={(player) => setLocalVideoPlayer(player)}
            onProgress={(e) => {
              if (e.played === 1) {
                setPlay(false);
                setPlayPauseBtn(false);
              }
              setVideoLength(e.loadedSeconds * 1000);
            }}
            id="react-player"
            url={localVideoURL}
            config={{
              file: {
                attributes: {
                  crossOrigin: "anonymous",
                },
              },
            }}
          />
        ) : (
          <video ref={videoRef} width="100%"></video>
        )}
      </div>
      <input
        ref={inputFile}
        type="file"
        onChange={async (event) => {
          try {
            setModalOpen(true);
            const { data } = await uploadVideo(
              event.target.files[0],
              session_id,
              (progressEvent) =>
                setProgressPercent(progressEvent.loaded / progressEvent.total)
            );
            console.log(data);
            for (let i = 1; i <= 30; i++) {
              await delay(1);
              setProcessCount(i);
            }
            setModalOpen(false);
          } catch (ex) {
            setModalOpen(false);
            alert(ex);
            console.log(ex);
          }
          setLocalVideoURL(URL.createObjectURL(event.target.files[0]));
        }}
        style={{ display: "none" }}
      />
      <div className="audio-transcribe-section">
        {videoOrCamera === "camera" ? (
          <AudioTranscribe
            sessionId={session_id}
            play={play}
            videoOrCamera={videoOrCamera}
            localAudioStream={localAudioStream}
            getTranscribeText={(text) => setTranscribeText(text)}
            timeInSeconds={timeInSeconds}
            getTranscribeArr={getTranscribeArr}
            timeout={videoOrCamera === "video" ? videoLength + 10000 : 60000}
          />
        ) : (
          <AudioNode
            sessionId={session_id}
            play={play}
            timeInSeconds={timeInSeconds}
            getTranscribeText={(text) => setTranscribeText(text)}
            getTranscribeArr={getTranscribeArr}
          />
        )}
      </div>
      <VideoFramesSection
        client={client}
        sessionId={session_id}
        play={play}
        mockFrames={frames}
        videoRef={videoRef}
        localVideo={videoOrCamera === "video"}
        timeInSeconds={timeInSeconds}
        videoPlayer={localVideoPlayer}
        generatedFrames={generatedFrames}
        setGeneratedFrames={setGeneratedFrames}
        uploadedFrames={uploadedFrames}
        setUploadedFrames={setUploadedFrames}
      />
    </div>
  );
};

const frames = [
  {
    sentimentName: "Sentiment Name",
    image: "image",
    v: 0.0,
    a: 0.0,
    i: 0.0,
  },
  {
    sentimentName: "Sentiment Name",
    image: "image",
    v: 0.0,
    a: 0.0,
    i: 0.0,
  },
  {
    sentimentName: "Sentiment Name",
    image: "image",
    v: 0.0,
    a: 0.0,
    i: 0.0,
  },
  {
    sentimentName: "Sentiment Name",
    image: "image",
    v: 0.0,
    a: 0.0,
    i: 0.0,
  },
  {
    sentimentName: "Sentiment Name",
    image: "image",
    v: 0.0,
    a: 0.0,
    i: 0.0,
  },
  {
    sentimentName: "Sentiment Name",
    image: "image",
    v: 0.0,
    a: 0.0,
    i: 0.0,
  },
  {
    sentimentName: "Sentiment Name",
    image: "image",
    v: 0.0,
    a: 0.0,
    i: 0.0,
  },
  {
    sentimentName: "Sentiment Name",
    image: "image",
    v: 0.0,
    a: 0.0,
    i: 0.0,
  },
];

export default PlayerComponent;
