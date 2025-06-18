type TUser = {
  name: string;
  age: number;
  email: string;
  city: string;
  hobbies?: string[];
  status: "employed" | "unemployeed";
};

type TEditorProps = {
  jsonInput: string;
  setJsonInput: (value: string) => void;
  setParsedJson: (value: TUser | null) => void;
  setErrors: (errors: string[]) => void;
};

export type { TUser, TEditorProps };
