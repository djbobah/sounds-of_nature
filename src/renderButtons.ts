import { soundClick } from ".";
import { IButton } from "./types";

export function renderButtons(item: IButton, root: Element) {
  const buttonContainer = document.createElement("div");
  buttonContainer.style.backgroundImage = `url('assets/${item.bg}')`;
  buttonContainer.style.width = "150px";
  buttonContainer.style.height = "150px";
  buttonContainer.style.backgroundSize = "cover";
  buttonContainer.style.border = "2px solid wheat";
  buttonContainer.style.borderRadius = "1rem";
  buttonContainer.style.display = "flex";
  buttonContainer.style.justifyContent = "center";
  buttonContainer.style.alignItems = "center";
  buttonContainer.style.cursor = "pointer";
  buttonContainer.onclick = () => soundClick(item.sound, item.bg);

  const icon = document.createElement("img");
  icon.src = `assets/icons/${item.icon}`;
  icon.width = 35;

  buttonContainer.append(icon);
  root.append(buttonContainer);
}
