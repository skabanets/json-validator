const JSON_EDITOR_SCHEMA = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 2 },
    age: { type: "integer", minimum: 0, maximum: 120 },
    email: { type: "string", format: "email" },
    city: { type: "string" },
    hobbies: {
      type: "array",
      items: { type: "string" },
      minItems: 1,
      uniqueItems: true,
    },
    status: {
      type: "string",
      enum: ["employed", "unemployeed"],
    },
  },
  required: ["name", "age", "email", "city", "status"],
  additionalProperties: false,
} as const;

export { JSON_EDITOR_SCHEMA };
