import React from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const file = windows && windows.imgfile && windows.imgfile.data;

  if (!file) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{file.name}</h2>
      </div>

      <div className="p-5 bg-white flex justify-center items-center">
        <img
          src={file.imageUrl || file.image}
          alt={file.name}
          className="max-w-full max-h-[70vh]"
        />
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
