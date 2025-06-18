import { useEffect, useMemo, type FC } from "react";
import MonacoEditor from "react-monaco-editor";
import Ajv, { type ErrorObject } from "ajv";
import { JSON_EDITOR_SCHEMA } from "../constants/schema.constant";
import type { TEditorProps } from "../models/editor.model";

const Editor: FC<TEditorProps> = ({
  jsonInput,
  setJsonInput,
  setParsedJson,
  setErrors,
}) => {
  const ajv = useMemo(() => new Ajv(), []);

  useEffect(() => {
    try {
      const json = JSON.parse(jsonInput);
      const validate = ajv.compile(JSON_EDITOR_SCHEMA);
      const valid = validate(json);

      if (valid) {
        setParsedJson(json);
        setErrors([]);
      } else {
        setParsedJson(null);
        const messages =
          validate.errors?.map(
            (err: ErrorObject) => `${err.instancePath} ${err.message}`
          ) || [];
        setErrors(messages);
      }
    } catch (e: unknown) {
      setParsedJson(null);
      if (e instanceof SyntaxError) {
        setErrors([e.message]);
      } else {
        setErrors(["Unknown error occurred"]);
      }
    }
  }, [jsonInput, ajv, setParsedJson, setErrors]);

  return (
    <div className="h-full border rounded overflow-hidden">
      <MonacoEditor
        height="100%"
        language="json"
        theme="vs-dark"
        value={jsonInput}
        options={{ automaticLayout: true }}
        onChange={(value) => setJsonInput(value ?? "")}
      />
    </div>
  );
};
export default Editor;
