import baseConfig from "../../eslint.config.mjs";
import nx from "@nx/eslint-plugin";

export default [
    ...baseConfig,
    ...nx.configs["flat/angular"],
    {
        files: [
            "**/*.ts"
        ],
        rules: {
            "@angular-eslint/directive-selector": [
                "error",
                {
                    type: "attribute",
                    prefix: "angularJestLodashEs",
                    style: "camelCase"
                }
            ],
            "@angular-eslint/component-selector": [
                "error",
                {
                    type: "element",
                    prefix: "angular-jest-lodash-es",
                    style: "kebab-case"
                }
            ],
            // Newly enabled by angular-eslint recommended set in angular-eslint v22 flat config;
            // was not enforced before the ESLint v9 / flat config upgrade.
            "@angular-eslint/prefer-on-push-component-change-detection": "off"
        }
    },
    ...nx.configs["flat/angular-template"]
];
