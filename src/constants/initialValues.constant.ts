const INITIAL_JSON_INPUT = {
  name: "Serhii Kabanets",
  age: 27,
  email: "skabanets97@gmail.com",
  city: "Kharkiv",
  hobbies: ["football", "sport"],
  isEmployeed: true,
} as const;

const INITIAL_JSON_INPUT_WITH_ERRORS = {
  name: "S",
  age: -5,
  email: "invalid-email",
  city: "",
  hobbies: [],
  isEmployeed: "employeed",
} as const;

export { INITIAL_JSON_INPUT, INITIAL_JSON_INPUT_WITH_ERRORS };
