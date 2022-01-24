import React, { useState } from "react";

import Header from "../components/headerRenew";
import Player from "../components/player";
import AiAnalysis from "../components/aiAnalysis";
import "./homeRenew.css";

const Home = ({ session_id }) => {
  const [generatedFrames, setGeneratedFrames] = useState(0);
  const [uploadedFrames, setUploadedFrames] = useState(0);

  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  const [transcribeText, setTranscribeText] = useState("");
  const [transcribe_arr, setTranscribe_arr] = useState([]);

  const [videoOrCamera, setVideoOrCamera] = useState(null);

  return (
    <div className="home-container">
      <Header />
      <div className="contents-container">
        <div className="player-container">
          <Player
            session_id={session_id}
            generatedFrames={generatedFrames}
            setGeneratedFrames={setGeneratedFrames}
            uploadedFrames={uploadedFrames}
            setUploadedFrames={setUploadedFrames}
            getTimeInSeconds={(t) => setTimeInSeconds(t)}
            setTranscribeText={setTranscribeText}
            getPlayStatus={(play) => setPlayStatus(play)}
            getTranscribeArr={(arr) => setTranscribe_arr(arr)}
            getVideoOrCamera={(vc) => setVideoOrCamera(vc)}
          />
        </div>
        <div className="analysis-container">
          <AiAnalysis
            session_id={session_id}
            play={playStatus}
            videoOrCamera={videoOrCamera}
            generatedFrames={generatedFrames}
            uploadedFrames={uploadedFrames}
            timeInSeconds={timeInSeconds}
            transcribeText={transcribeText}
            playStatus={playStatus}
            transcribeArr={transcribe_arr}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
