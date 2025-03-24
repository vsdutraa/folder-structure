import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

import boundaries from "eslint-plugin-boundaries";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    plugins: { boundaries },

    settings: {
      "boundaries/elements": [
        {
          mode: "full",
          type: "shared",
          pattern: "components/**/*",
        },
        {
          mode: "full",
          type: "feature",
          capture: ["featureName"],
          pattern: "features/*/**/*",
        },
        {
          type: "app",
          capture: ["_", "fileName"],
          pattern: "app/**/*",
        },
      ],
    },

    rules: {
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          rules: [
            {
              from: ["shared"],
              allow: ["shared"],
            },
            {
              from: ["feature"],
              allow: [
                ["shared"],
                ["feature", { featureName: "${featureName}" }],
              ],
            },
            {
              from: ["app"],
              allow: ["shared", "feature"],
            },
            {
              from: ["app"],
              allow: [["app", { fileName: "*.css" }]],
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
