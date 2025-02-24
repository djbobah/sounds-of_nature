import data from "./data";
import "./index.scss";
import { renderButtons } from "./renderButtons";
import { renderVolume } from "./renderVolume";
import { setBodyBackground } from "./setBodyBackground";

const root = document.querySelector("#app");

const buttonContainer = document.createElement("div");
const backgroundElement = document.createElement("div");
buttonContainer.classList.add("wrapper-buttons");

let currentAudio: HTMLAudioElement | null = null;
let isSoundPlaying = false;

export const soundClick = (sound: string, backgroundImage: string) => {
  if (currentAudio && currentAudio.src.includes(sound)) {
    if (isSoundPlaying) {
      currentAudio.pause();
      isSoundPlaying = false;
    } else {
      currentAudio.play();
      isSoundPlaying = true;
    }
  } else {
    if (currentAudio) {
      currentAudio.pause();
    }
    currentAudio = new Audio(`assets/sounds/${sound}`);
    currentAudio.play();
    isSoundPlaying = true;

    currentAudio.onended = () => {
      isSoundPlaying = false;
    };
  }
  setBodyBackground(backgroundImage, backgroundElement);
};

data.forEach((item) => renderButtons(item, buttonContainer));

const volumeWrapper = document.createElement("div");
const volume = renderVolume(volumeWrapper);

volume.oninput = () => {
  currentAudio.volume = Number(volume.value) / 100;
};
volumeWrapper.append(volume);

root.append(buttonContainer);
root.append(volumeWrapper);
