import { useState } from "react";
import Editor from "./Editor";
import { INITIAL_JSON_INPUT } from "../constants/initialValues.constant";
import type { TUser } from "../models/editor.model";

const App = () => {
  const [jsonInput, setJsonInput] = useState<string>(
    JSON.stringify(INITIAL_JSON_INPUT, null, 2)
  );
  const [parsedJson, setParsedJson] = useState<TUser | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  return (
    <div className="h-[500px]">
      <Editor
        jsonInput={jsonInput}
        setJsonInput={setJsonInput}
        setParsedJson={setParsedJson}
        setErrors={setErrors}
      />
    </div>
  );
};

export default App;
