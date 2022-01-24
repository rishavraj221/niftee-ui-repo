import React, { useState, useEffect } from "react";

import Icon from "../assets/Icons";
import { getScore, getTextScore } from "../api/demo";
import "./aiAnalysis.css";

const graphSVGScaleRatio = 723 / 623; // do not change
// const radiusOfGraph = 250; // do not change
const radiusOfGraph = 218;

const heightOfSentimentPlot = 40; // can be changed for responsivness
const widthOfSentimentPlot = 200; // can be changed for responsivness

const heightOfHistoryPlot = 5; // can be changed for responsivness
const widthOfHistoryPlot = 5; // can be changed for responsivness

const heightOfGraph = 480; // can be changed for responsivness
const widthOfGraph = graphSVGScaleRatio * heightOfGraph;

const originShiftX = heightOfGraph / 2 - 1;
const originShiftY = Math.floor(widthOfGraph / 2);

let obj = {
  test_findings: [],
};
let nlp = {
  test_findings: [],
};

// mock data
// const audioMockData = [
//   { x: 1, y: 0, sentimentName: "Moderataly Calm" },
//   { x: -0.3, y: 0.2, sentimentName: "Moderataly excited" },
//   { x: 0.3, y: 0.2, sentimentName: "Happy" },
// ];

// const facialMockData = [
//   { x: -0.3, y: 0.4, sentimentName: "Moderataly Calm" },
//   { x: -0.5, y: 0.5, sentimentName: "Moderataly excited" },
//   { x: 0.1, y: 1, sentimentName: "Excited" },
// ];

const AiGraphRenewSVG = ({
  session_id,
  play,
  videoOrCamera,
  generatedFrames,
  uploadedFrames,
  timeInSeconds,
  transcribeText,
  transcribeArr,
  playStatus,
}) => {
  const [faceScoreData, setFaceScoreData] = useState([]);
  const [audioScoreData, setAudioScoreData] = useState([]);
  // const [faceScoreData, setFaceScoreData] = useState(facialMockData);
  // const [audioScoreData, setAudioScoreData] = useState(audioMockData);

  const [successfull_video_score, setSuccessfull_video_score] = useState(0);
  const [successfull_audio_score, setSuccessfull_audio_score] = useState(0);

  const get_audio_score = async () => {
    try {
      const last_count = transcribeArr[transcribeArr.length - 1].transcript;
      const last_second_count =
        transcribeArr[transcribeArr.length - 2].transcript;
      const transcript_data = last_second_count + last_count;
      console.log(transcript_data);

      const { data } = await getTextScore(transcript_data);
      const audioScore = {
        x: data.valence,
        y: data.arousal,
        sentimentName: data.emotion,
      };
      if (audioScore && audioScore.sentimentName) {
        setAudioScoreData([...audioScoreData, audioScore]);
        setSuccessfull_audio_score(successfull_audio_score + 1);
        nlp.test_findings.push({
          timeInSeconds,
          nlp: {
            x: data.valence,
            y: data.arousal,
            sentimentName: data.emotion,
          },
        });
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleScore = async (startFrameCount, endFrameCount) => {
    try {
      if (startFrameCount >= endFrameCount) return;
      if (playStatus) {
        console.log(
          "score api called - " + startFrameCount + " to " + endFrameCount
        );
        const { data } = await getScore(
          session_id,
          startFrameCount,
          endFrameCount
        );
        console.log(data);

        if (!data.valence) return;

        setSuccessfull_video_score(successfull_video_score + 1);

        if (data && data.valence) {
          obj.test_findings.push({
            timeInSeconds,
            facial: {
              x: data.valence,
              y: data.arousal,
              sentimentName: data.emotion,
            },
          });

          const faceScore = {
            x: data.valence,
            y: data.arousal,
            sentimentName: data.emotion,
          };
          if (faceScore && faceScore.x && faceScore.sentimentName)
            setFaceScoreData([...faceScoreData, faceScore]);
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    if (timeInSeconds > 10 && (timeInSeconds - 3) % 5 === 0) {
      const temp = Math.floor((timeInSeconds - 3) / 5);
      let frameFrom = (temp - 2) * 15 + 1;
      const frameTo = Math.min(temp * 15, uploadedFrames);
      if (frameFrom >= frameTo && frameFrom > 15) frameFrom -= 15;
      handleScore(frameFrom, frameTo);
      if (transcribeArr.length > 1) get_audio_score();
    }
  }, [timeInSeconds]);

  return (
    <div className="ai-analysis-container">
      {/* ai graph  */}
      <div className="ai-graph-svg">
        <Icon name="aigraphrenew" size={heightOfGraph} />
        {audioScoreData && audioScoreData.length > 0 && (
          <div
            className="audio-plot"
            style={{
              bottom:
                originShiftX -
                heightOfSentimentPlot / 2 +
                audioScoreData[audioScoreData.length - 1].y * radiusOfGraph,
              left:
                originShiftY -
                heightOfSentimentPlot / 2 +
                audioScoreData[audioScoreData.length - 1].x * radiusOfGraph,
              height: heightOfSentimentPlot,
              width: widthOfSentimentPlot,
              borderRadius: heightOfSentimentPlot,
            }}
          >
            <Icon name="mic" size={22} color="#29CC39" />
            <div className="sentiment-name" style={{ color: "#29CC39" }}>
              {audioScoreData[audioScoreData.length - 1].sentimentName.substr(
                0,
                30
              )}
            </div>
          </div>
        )}
        {faceScoreData && faceScoreData.length > 0 && (
          <div
            className="facial-exp-plot"
            style={{
              bottom:
                originShiftX -
                heightOfSentimentPlot / 2 +
                faceScoreData[faceScoreData.length - 1].y * radiusOfGraph,
              left:
                originShiftY -
                heightOfSentimentPlot / 2 +
                faceScoreData[faceScoreData.length - 1].x * radiusOfGraph,
              height: heightOfSentimentPlot,
              width: widthOfSentimentPlot,
              borderRadius: heightOfSentimentPlot,
            }}
          >
            <Icon name="face" size={22} color="#3361FF" />
            <div className="sentiment-name" style={{ color: "#3361FF" }}>
              {faceScoreData[faceScoreData.length - 1].sentimentName.substr(
                0,
                30
              )}
            </div>
          </div>
        )}
        {audioScoreData &&
          audioScoreData.length > 1 &&
          audioScoreData.map((d, index) => (
            <div
              key={index}
              style={{
                bottom: originShiftX + d.y * radiusOfGraph,
                left: originShiftY + d.x * radiusOfGraph,
                height: heightOfHistoryPlot,
                width: widthOfHistoryPlot,
                borderRadius: heightOfHistoryPlot,
                backgroundColor: `rgba(41, 204, 57, ${
                  (index + 1) / audioScoreData.length
                })`,
                position: "absolute",
              }}
            />
          ))}
        {faceScoreData &&
          faceScoreData.length > 1 &&
          faceScoreData.map((d, index) => (
            <div
              key={index}
              style={{
                bottom: originShiftX + d.y * radiusOfGraph,
                left: originShiftY + d.x * radiusOfGraph,
                height: heightOfHistoryPlot,
                width: widthOfHistoryPlot,
                borderRadius: heightOfHistoryPlot,
                backgroundColor: `rgba(51, 97, 255, ${
                  (index + 1) / faceScoreData.length
                })`,
                position: "absolute",
              }}
            />
          ))}
      </div>

      <div className="word-analysis-cont">
        <div className="analysis-detail-cont">
          <div className="word-count" style={{ color: "#29cc39" }}>
            {transcribeText ? transcribeText.split(" ").length : 0}
          </div>
          <div className="counter-title">Words Captured</div>
        </div>
        <div className="analysis-detail-cont">
          <div className="avg-counter-title" style={{ color: "#29CC39" }}>
            Average words per sec
          </div>
          <div
            className="avg-count"
            style={{
              backgroundColor: "rgba(41, 204, 57, 0.2)",
              color: "#29CC39",
            }}
          >
            {transcribeText && timeInSeconds > 0
              ? parseFloat(
                  transcribeText.split(" ").length / timeInSeconds
                ).toFixed(2)
              : "0.0"}
          </div>
        </div>
        <div className="analysis-detail-cont">
          <div className="batch-processed-title" style={{ color: "#29CC39" }}>
            NLP Batches Processed
          </div>
          <div
            className="batch-processed-count"
            style={{ backgroundColor: "#29CC39" }}
          >
            {successfull_audio_score}
          </div>
        </div>
      </div>

      <div className="frame-analysis-cont">
        <div className="analysis-detail-cont">
          <div className="word-count" style={{ color: "#3361FF" }}>
            {uploadedFrames}
          </div>
          <div className="counter-title">Frames Captured</div>
        </div>
        <div className="analysis-detail-cont">
          <div className="avg-counter-title" style={{ color: "#3361FF" }}>
            Average frames per sec
          </div>
          <div
            className="avg-count"
            style={{
              backgroundColor: "rgba(51, 97, 255, 0.2)",
              color: "#3361FF",
            }}
          >
            {timeInSeconds > 0
              ? parseFloat(uploadedFrames / timeInSeconds).toFixed(2)
              : "0.0"}
          </div>
        </div>
        <div className="analysis-detail-cont">
          <div className="batch-processed-title" style={{ color: "#3361FF" }}>
            Facial Expression Batches Processed
          </div>
          <div
            className="batch-processed-count"
            style={{ backgroundColor: "#3361FF" }}
          >
            {successfull_video_score}
          </div>
        </div>
      </div>
      {/* <button
        onClick={() =>
          console.log(JSON.stringify(obj) + "\n" + JSON.stringify(nlp))
        }
      >
        Generate JSON
      </button> */}
    </div>
  );
};

export default AiGraphRenewSVG;
