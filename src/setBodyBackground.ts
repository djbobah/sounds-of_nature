export const setBodyBackground = (
  setBodyBackground: string,
  backgroundElement: HTMLDivElement
) => {
  const body = document.querySelector("body");

  backgroundElement.style.backgroundImage = `url('assets/${setBodyBackground}')`;
  backgroundElement.style.position = "fixed";
  backgroundElement.style.top = "0";
  backgroundElement.style.left = "0";
  backgroundElement.style.width = "100%";
  backgroundElement.style.height = "100%";
  backgroundElement.style.zIndex = "-1";
  backgroundElement.style.filter = "blur(5px)";
  backgroundElement.style.transition =
    "background-image 0.5s ease, filter 0.5s ease;";
  body.append(backgroundElement);
};
