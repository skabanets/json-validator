import type { FC } from "react";
import type { TValidationPanelProps } from "../models/editor.model";

const ValidationPanel: FC<TValidationPanelProps> = ({ errors }) => {
  if (errors.length === 0) {
    return (
      <div className="p-4 bg-green-100 border border-green-400 rounded">
        JSON is valid
      </div>
    );
  }

  return (
    <div className="p-4 bg-red-100 border border-red-400 rounded overflow-auto max-h-48">
      <h2 className="font-bold mb-2">Validation Errors:</h2>
      <ul className="list-disc pl-5 space-y-1">
        {errors.map((error, index) => (
          <li key={index} className="text-red-700">
            {error}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValidationPanel;
