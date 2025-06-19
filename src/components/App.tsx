import { useState } from "react";
import Editor from "./Editor";
import {
  INITIAL_JSON_INPUT,
  INITIAL_JSON_INPUT_WITH_ERRORS,
} from "../constants/initialValues.constant";
import type { TUser } from "../models/editor.model";
import ValidationPanel from "./ValidationPanel";
import JsonViewer from "./JsonViewer";

const App = () => {
  const [jsonInput, setJsonInput] = useState<string>(
    JSON.stringify(INITIAL_JSON_INPUT, null, 2)
  );
  const [parsedJson, setParsedJson] = useState<TUser | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const handleLoadValidJson = () => {
    const validJson = JSON.stringify(INITIAL_JSON_INPUT, null, 2);
    setJsonInput(validJson);
  };

  const handleLoadJsonWithErrors = () => {
    const invalidJson = JSON.stringify(INITIAL_JSON_INPUT_WITH_ERRORS, null, 2);
    setJsonInput(invalidJson);
  };

  return (
    <div className="min-h-screen flex flex-col p-4 gap-4">
      <h1 className="text-2xl font-bold mb-4">JSON Validator</h1>
      <div className="flex gap-4 mb-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
          type="button"
          onClick={handleLoadValidJson}
        >
          Load Valid JSON
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
          type="button"
          onClick={handleLoadJsonWithErrors}
        >
          Load JSON with Errors
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 flex-1">
        <Editor
          jsonInput={jsonInput}
          setJsonInput={setJsonInput}
          setParsedJson={setParsedJson}
          setErrors={setErrors}
        />
        <div className="flex flex-col gap-4">
          <ValidationPanel errors={errors} />
          <JsonViewer parsedJson={parsedJson} />
        </div>
      </div>
    </div>
  );
};

export default App;
