import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";
import eslintConfigPrettier from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  { ignores: [".next/**", "out/**", "dist/**", "node_modules/**"] },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  eslintConfigPrettier,

  {
    rules: {
      "max-len": [
        "error",
        {
          code: 120,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],
    },
  },
];
