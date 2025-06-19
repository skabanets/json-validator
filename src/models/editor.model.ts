type TUser = {
  name: string;
  age: number;
  email: string;
  city: string;
  hobbies?: string[];
  isEmployeed: boolean;
};

type TEditorProps = {
  jsonInput: string;
  setJsonInput: (value: string) => void;
  setParsedJson: (value: TUser | null) => void;
  setErrors: (errors: string[]) => void;
};

type TValidationPanelProps = {
  errors: string[];
};

type TJsonViewerProps = {
  parsedJson: TUser | null;
};

export type { TUser, TEditorProps, TValidationPanelProps, TJsonViewerProps };
