export const renderVolume = (volumeWrapper: HTMLDivElement) => {
  volumeWrapper.style.display = "flex";
  volumeWrapper.style.justifyContent = "center";

  const volume = document.createElement("input");
  volume.style.margin = "0 auto";
  volume.type = "range";
  volume.min = "0";
  volume.max = "100";
  volume.step = "1";
  volume.value = "50";

  return volume;
};
