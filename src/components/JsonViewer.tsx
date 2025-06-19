import type { FC } from "react";
import { JsonView, allExpanded, defaultStyles } from "react-json-view-lite";
import { AlertCircle, FileJson } from "lucide-react";
import type { TJsonViewerProps } from "../models/editor.model";
import "react-json-view-lite/dist/index.css";

const JsonViewer: FC<TJsonViewerProps> = ({ parsedJson }) => {
  if (!parsedJson) {
    return (
      <div className="p-4 bg-gray-100 border rounded text-gray-500">
        <div className="flex gap-2.5">
          <AlertCircle className="text-gray-500" />
          <p>No valid JSON to display</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white border rounded overflow-auto h-full">
      <div className="flex items-center gap-2 mb-2">
        <FileJson className="text-blue-500" />
        <span className="font-bold">Valid JSON Preview:</span>
      </div>
      <JsonView
        data={parsedJson}
        shouldExpandNode={allExpanded}
        style={defaultStyles}
      />
    </div>
  );
};

export default JsonViewer;
