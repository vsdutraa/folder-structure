import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default {
  ...eslintConfig,

  plugins: [boundaries],

  settings: {
    "boundaries/elements": [
      {
        type: "shared",
        pattern: "src/components/**/*",
      },
      {
        type: "feature",
        capture: "featureName",
        pattern: "src/features/*/**/*",
      },
      {
        type: "app",
        capture: ["_", "fileName"],
        pattern: "src/app/**/*",
      },
      {
        type: "neverImport",
        pattern: "src/*",
      },
    ],
  },
  rules: {
    ...boundaries.configs.recommended.rules,

    "boundaries/element-types": [
      2,
      {
        default: "disallow",
        rules: [
          {
            from: "shared",
            allow: "shared",
          },
          {
            from: "feature",
            allow: [
              "shared",
              ["feature", { featureName: "${from.featureName}" }],
            ],
          },
          {
            from: ["app", "neverImport"],
            allow: ["shared", "feature"],
          },
          {
            from: "app",
            allow: [["app", { fileName: "*.css" }]],
          },
        ],
      },
    ],
  },
};
