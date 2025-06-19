import { useEffect, useMemo, type FC } from "react";
import MonacoEditor from "react-monaco-editor";
import Ajv, { type ErrorObject } from "ajv";
import addFormats from "ajv-formats";
import { JSON_EDITOR_SCHEMA } from "../constants/schema.constant";
import type { TEditorProps } from "../models/editor.model";

const Editor: FC<TEditorProps> = ({
  jsonInput,
  setJsonInput,
  setParsedJson,
  setErrors,
}) => {
  const ajv = useMemo(() => {
    const ajvInstance = new Ajv({ allErrors: true });
    addFormats(ajvInstance);
    return ajvInstance;
  }, []);

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
            (err: ErrorObject) =>
              `${err.instancePath || "/"} ${err.message || "validation error"}`
          ) || [];

        setErrors(messages);
      }
    } catch (e: unknown) {
      setParsedJson(null);
      if (e instanceof SyntaxError) {
        setErrors([`Syntax error: ${e.message}`]);
      } else if (e && typeof e === "object" && "message" in e) {
        setErrors([`Error: ${(e as Error).message}`]);
      } else {
        setErrors(["Unknown error: Unrecognized issue occurred"]);
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
        onChange={(value) =>
          setJsonInput(typeof value === "string" ? value : "")
        }
      />
    </div>
  );
};
export default Editor;
