import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";

import Header from "../components/header";
import AudioTranscribe from "../components/AudioTranscript/audio";
import VideoFramesSection from "../components/video-frames-section";
import AIGraph from "../components/AiGraph";
// import useInterval from "../hooks/useInterval";
import { getScore } from "../api/demo";
import "./home.css";

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

// const faceData = [
//   { x: 0.2, y: 0.3, sentimentName: "Amused" },
//   { x: 0.4, y: 0.1, sentimentName: "Calm" },
//   { x: 0.1, y: -0.2, sentimentName: "Pleased" },
//   { x: 0.2, y: 0.2, sentimentName: "Sleepy" },
//   { x: 0.3, y: 0.3, sentimentName: "Tired" },
//   { x: 0.1, y: 0.4, sentimentName: "Glad" },
// ];

// const audioData = [
//   { x: -0.2, y: 0.3, sentimentName: "Bored" },
//   { x: -0.4, y: 0.1, sentimentName: "Angry" },
//   { x: 0.2, y: -0.2, sentimentName: "Tense" },
//   { x: -0.1, y: 0.2, sentimentName: "Miserable" },
//   { x: -0.3, y: -0.3, sentimentName: "Sad" },
//   { x: 0.2, y: -0.2, sentimentName: "Afraid" },
// ];

// const audioCaption =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices sagittis orci a scelerisque purus semper eget. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Tempus iaculis urna id volutpat lacus laoreet. Nisl condimentum id venenatis a. Dignissim diam quis enim lobortis scelerisque. Mattis molestie a iaculis at erat pellentesque. Purus faucibus ornare suspendisse sed nisi. Tortor vitae purus faucibus ornare suspendisse. Malesuada bibendum arcu vitae elementum curabitur. Mauris a diam maecenas sed enim. Non odio euismod lacinia at quis risus. Amet mauris commodo quis imperdiet massa. Elit duis tristique sollicitudin nibh sit amet. Libero enim sed faucibus turpis in eu. Felis imperdiet proin fermentum leo vel orci. Tellus orci ac auctor augue mauris augue. Laoreet suspendisse interdum consectetur libero. Amet commodo nulla facilisi nullam vehicula ipsum. Nisl condimentum id venenatis a. Tellus at urna condimentum mattis pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices sagittis orci a scelerisque purus semper eget. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Tempus iaculis urna id volutpat lacus laoreet. Nisl condimentum id venenatis a. Dignissim diam quis enim lobortis scelerisque. Mattis molestie a iaculis at erat pellentesque. Purus faucibus ornare suspendisse sed nisi. Tortor vitae purus faucibus ornare suspendisse. Malesuada bibendum arcu vitae elementum curabitur. Mauris a diam maecenas sed enim. Non odio euismod lacinia at quis risus. Amet mauris commodo quis imperdiet massa. Elit duis tristique sollicitudin nibh sit amet. Libero enim sed faucibus turpis in eu. Felis imperdiet proin fermentum leo vel orci. Tellus orci ac auctor augue mauris augue. Laoreet suspendisse interdum consectetur libero. Amet commodo nulla facilisi nullam vehicula ipsum. Nisl condimentum id venenatis a. Tellus at urna condimentum mattis pellentesque.";

// const facialExpressionAnalysisResult = {
//   v: 0.0,
//   a: 0.0,
//   i: 0.0,
// };

// const nlpSentimentAnalysisResult = {
//   v: 0.0,
//   a: 0.0,
//   i: 0.0,
// };

const Home = () => {
  const [videoOrCamera, setVideoOrCamera] = useState("");
  const [videoURLval, setVideoURLval] = useState(null);

  const [vPlayer, setPlayer] = useState(null);
  const [videoLength, setVideoLength] = useState(null);

  const [videoStream, setVideoStream] = useState(null);
  const [localAudioStream, setLocalAudioStream] = useState(null);

  const [play, setPlay] = useState(false);
  const [showPlayPauseBtn, setShowPlayPauseBtn] = useState(false);

  const [faceScoreData, setFaceScoreData] = useState([]);
  const [audioScoreData, setAudioScoreData] = useState([]);

  const videoRef = useRef(null);

  const handlePlay = async () => {
    if (!window.navigator.mediaDevices)
      alert(
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

  const handleScore = async () => {
    try {
      if (play) {
        console.log("score api called");
        const { data } = await getScore("rishavraj_test");

        console.log(data);

        if (data && data.nlpxAxis) {
          const faceScore = {
            x: data.frameAvgxAxis,
            y: data.frameAvgyAxis,
            sentimentName: data.frameAvgEmotion,
          };
          const audioScore = {
            x: data.nlpxAxis,
            y: data.nlpyAxis,
            sentimentName: data.nlpEmotion,
          };
          setFaceScoreData([...faceScoreData, faceScore]);
          setAudioScoreData([...audioScoreData, audioScore]);
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  // useInterval(handleScore, 5000);

  return (
    <div className="home-container">
      <Header
        onClickArrow={async (val) => {
          setVideoOrCamera("video");
          setVideoURLval(val);
        }}
        onClickCamera={() => {
          if (videoOrCamera)
            return alert(
              "It seems you are already in a session, if you want to start a new session please refresh the window..."
            );
          setVideoOrCamera("camera");
          setShowPlayPauseBtn(true);
          handlePlay();
        }}
        getLocalVideoURL={(url) => {
          setVideoOrCamera("video");
          setShowPlayPauseBtn(true);
          setVideoURLval(url);
        }}
        videoOrCamera={videoOrCamera}
      />
      <div className="home-contents-container">
        <div className="home-hero-contents">
          <div id="video-player" className="video-player">
            {videoOrCamera === "video" ? (
              <ReactPlayer
                playing={play}
                ref={(player) => setPlayer(player)}
                onProgress={(e) => {
                  if (e.played === 1) {
                    setPlay(false);
                    setShowPlayPauseBtn(false);
                  }
                  setVideoLength(e.loadedSeconds * 1000);
                }}
                id="react-player"
                url={videoURLval}
                width="100%"
                height="400px"
                config={{
                  file: {
                    attributes: {
                      crossOrigin: "anonymous",
                    },
                  },
                }}
              />
            ) : (
              <video
                ref={videoRef}
                id="video"
                width="100%"
                height="400px"
              ></video>
            )}
          </div>
          <div className="ai-analysis-container">
            <AIGraph face={faceScoreData} audio={audioScoreData} />
            <div className="ai-analysis-detail-container">
              <div className="ai-analysis-result">
                <div className="ai-analysis-result-head">
                  Combined Niftee Sentiment
                </div>
                <div className="ai-analysis-niftee-result"></div>
              </div>
              <div className="ai-analysis-result-detail">
                <div className="ai-analysis-result-detail-head">
                  Facial Expression Analysis
                </div>
                <div className="ai-analysis-result-detail-val">
                  {"V| " +
                    (faceScoreData.length > 0
                      ? faceScoreData[
                          faceScoreData.length - 1
                        ].frameAvgxAxis.toPrecision(3)
                      : "0.00") +
                    "  A| " +
                    (faceScoreData.length > 0
                      ? faceScoreData[
                          faceScoreData.length - 1
                        ].frameAvgyAxis.toPrecision(3)
                      : "0.00") +
                    "  I| " +
                    "0.00"}
                </div>
                <div className="ai-analysis-result-detail-sn">
                  {faceScoreData.length > 0
                    ? faceScoreData[faceScoreData.length - 1].frameAvgEmotion
                    : "Sentiment Name"}
                </div>
                <div className="ai-result-bar"></div>
                <div className="ai-analysis-result-detail-head">
                  NLP Sentiment Analysis
                </div>
                <div className="ai-analysis-result-detail-val">
                  {"V| " +
                    (audioScoreData.length > 0
                      ? audioScoreData[
                          audioScoreData.length - 1
                        ].nlpxAxis.toPrecision(3)
                      : "0.00") +
                    "  A| " +
                    (audioScoreData.length > 0
                      ? audioScoreData[
                          audioScoreData.length - 1
                        ].nlpxAxis.toPrecision(3)
                      : "0.00") +
                    "  I| " +
                    "0.00"}
                </div>
                <div className="ai-analysis-result-detail-sn">
                  {audioScoreData.length > 0
                    ? audioScoreData[audioScoreData.length - 1].nlpEmotion
                    : "Sentiment Name"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {showPlayPauseBtn && (
          <button
            onClick={() => {
              if (videoOrCamera === "video") {
                if (!play) {
                  const audStr = new MediaStream(
                    vPlayer.getInternalPlayer().captureStream().getAudioTracks()
                  );
                  setLocalAudioStream(audStr);
                }
                setPlay(!play);
                console.log(play);
              } else {
                if (play) {
                  videoRef.current.pause();
                  setPlay(false);
                  videoStream.getTracks().forEach((track) => track.stop());
                } else {
                  setVideoOrCamera("camera");
                  handlePlay();
                }
              }
            }}
          >
            {play ? "Pause" : "Play"}
          </button>
        )}

        <button onClick={handleScore}>Get Score</button>

        <VideoFramesSection
          play={play}
          mockFrames={frames}
          videoRef={videoRef}
          localVideo={videoOrCamera === "video"}
          videoPlayer={vPlayer}
        />
        <div className="audio-transcribe-section">
          <AudioTranscribe
            play={play}
            videoOrCamera={videoOrCamera}
            localAudioStream={localAudioStream}
            timeout={videoOrCamera === "video" ? videoLength + 2000 : 600000}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
