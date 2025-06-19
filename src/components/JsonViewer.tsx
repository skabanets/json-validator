import type { FC } from "react";
import { JsonView, allExpanded, defaultStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import type { TJsonViewerProps } from "../models/editor.model";

const JsonViewer: FC<TJsonViewerProps> = ({ parsedJson }) => {
  if (!parsedJson) {
    return (
      <div className="p-4 bg-gray-100 border rounded text-gray-500">
        No valid JSON to display
      </div>
    );
  }

  return (
    <div className="p-4 bg-white border rounded overflow-auto h-full">
      <JsonView
        data={parsedJson}
        shouldExpandNode={allExpanded}
        style={defaultStyles}
      />
    </div>
  );
};

export default JsonViewer;
