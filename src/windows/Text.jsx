import React from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const file = windows && windows.txtfile && windows.txtfile.data;

  if (!file) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{file.name}</h2>
      </div>

      <div className="p-5 space-y-6 bg-white">
        {file.image || file.imageUrl ? (
          <div className="w-full">
            <img
              src={file.image || file.imageUrl}
              alt={file.name}
              className="max-w-full mb-4"
            />
          </div>
        ) : null}

        {file.subtitle ? (
          <h3 className="text-lg font-semibold">{file.subtitle}</h3>
        ) : null}

        {Array.isArray(file.description)
          ? file.description.map((line, i) => (
              <p key={i} className="mb-2">
                {line}
              </p>
            ))
          : file.content || file.text || null}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
