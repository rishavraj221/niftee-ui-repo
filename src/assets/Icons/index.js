import React from "react";

import Account from "./account";
import AiGraph from "./aiGraph";
import ArrowRight from "./arrowRight";
import Assets from "./assets";
import Camera from "./camera";
import CameraOff from "./cameraOff";
import CameraOn from "./cameraOn";
import Collection from "./collection";
import Cross from "./cross";
import Edit from "./edit";
import Face from "./face";
import Images from "./images";
import Login from "./login";
import Menu from "./menu";
import Mic from "./mic";
import Play from "./play";
import Plus from "./plus";
import Profile from "./profile";
import Settings from "./settings";
import Upload from "./upload";
import Vimeo from "./vimeo";
import VimeoPlay from "./vimeoplay";
import Voice from "./voice";

function Icon({ name, color, size }) {
  const n = name.toLowerCase();

  if (n === "account") return <Account color={color} size={size} />;
  if (n === "aigraph") return <AiGraph size={size} />;
  if (n === "arrowright") return <ArrowRight color={color} size={size} />;
  if (n === "assets") return <Assets color={color} size={size} />;
  if (n === "camera") return <Camera color={color} size={size} />;
  if (n === "cameraoff") return <CameraOff color={color} size={size} />;
  if (n === "cameraon") return <CameraOn color={color} size={size} />;
  if (n === "collection") return <Collection color={color} size={size} />;
  if (n === "cross") return <Cross color={color} size={size} />;
  if (n === "edit") return <Edit color={color} size={size} />;
  if (n === "face") return <Face color={color} size={size} />;
  if (n === "images") return <Images color={color} size={size} />;
  if (n === "login") return <Login color={color} size={size} />;
  if (n === "menu") return <Menu color={color} size={size} />;
  if (n === "mic") return <Mic color={color} size={size} />;
  if (n === "play") return <Play color={color} size={size} />;
  if (n === "plus") return <Plus color={color} size={size} />;
  if (n === "profile") return <Profile color={color} size={size} />;
  if (n === "settings") return <Settings color={color} size={size} />;
  if (n === "upload") return <Upload color={color} size={size} />;
  if (n === "vimeo") return <Vimeo color={color} size={size} />;
  if (n === "vimeoplay") return <VimeoPlay size={size} />;
  if (n === "voice") return <Voice color={color} size={size} />;

  return;
}

export default Icon;
